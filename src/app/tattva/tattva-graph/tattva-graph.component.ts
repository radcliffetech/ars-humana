import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as d3 from 'd3';
import { TATTVA_OPINIONS } from 'src/assets/mock/opinions.mock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tattva-graph',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tattva-graph.component.html',
  styleUrl: './tattva-graph.component.css',
})
export class TattvaGraphComponent {
  highlightedGroups = new Set<string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleGroup(group: string, checked: boolean) {
    if (checked) {
      this.highlightedGroups.add(group);
    } else {
      this.highlightedGroups.delete(group);
    }
    this.updateHighlights();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = 800;
      const height = 800;

      const svg = d3
        .select('#tattva-graph')
        .attr('viewBox', [0, 0, width, height] as any)
        .style('border', '1px solid #ccc');

      let tooltip: HTMLDivElement;

      tooltip = document.createElement('div');
      tooltip.style.position = 'absolute';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.background = 'white';
      tooltip.style.border = '1px solid #ccc';
      tooltip.style.padding = '6px 10px';
      tooltip.style.borderRadius = '6px';
      tooltip.style.fontSize = '14px';
      tooltip.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';
      tooltip.style.display = 'none';
      document.body.appendChild(tooltip);

      // Define extended TattvaNode type
      interface TattvaNode extends d3.SimulationNodeDatum {
        id: string;
        label: string;
        symbol?: string;
        color?: string;
      }

      // Generate nodes from TATTVA_OPINIONS
      const nodes: TattvaNode[] = TATTVA_OPINIONS.map((op) => ({
        id: op.id,
        label: op.archetype || op.id,
        symbol: op.symbol,
        color: op.color,
      }));

      // Manually constructed tattva descent structure: linear and branched relationships
      const links = [
        { source: '01_siva', target: '02_sakti' },
        { source: '02_sakti', target: '03_sadasiva' },
        { source: '03_sadasiva', target: '04_isvara' },
        { source: '04_isvara', target: '05_suddhavidya' },
        { source: '05_suddhavidya', target: '06_maya' },
        { source: '06_maya', target: '07_kala' },
        { source: '06_maya', target: '08_niyati' },
        { source: '06_maya', target: '09_raga' },
        { source: '06_maya', target: '10_vidya' },
        { source: '06_maya', target: '11_kala' },
        { source: '06_maya', target: '12_purusa' },
        { source: '12_purusa', target: '13_prakrti' },
        { source: '13_prakrti', target: '14_buddhi' },
        { source: '14_buddhi', target: '15_ahamkara' },
        { source: '15_ahamkara', target: '16_manas' },
        { source: '16_manas', target: '17_srotra' },
        { source: '16_manas', target: '18_tvak' },
        { source: '16_manas', target: '19_caksus' },
        { source: '16_manas', target: '20_jihva' },
        { source: '16_manas', target: '21_ghrana' },
        { source: '16_manas', target: '22_vak' },
        { source: '16_manas', target: '23_pani' },
        { source: '16_manas', target: '24_pada' },
        { source: '16_manas', target: '25_upastha' },
        { source: '16_manas', target: '26_payu' },
        { source: '27_sabda', target: '32_akasa' },
        { source: '28_sparsa', target: '33_vayu' },
        { source: '29_rupa', target: '34_tejas' },
        { source: '30_rasa', target: '35_apas' },
        { source: '31_gandha', target: '36_prthivi' },
      ];

      // Add fully connected subgraph among Māyā, five kañcukas, and puruṣa
      const mayaGroup = ['07_kala', '08_niyati', '09_raga', '10_vidya', '11_kala', '12_purusa'];
      // Add links between all pairs in mayaGroup
      for (let i = 0; i < mayaGroup.length; i++) {
        for (let j = i + 1; j < mayaGroup.length; j++) {
          links.push({ source: mayaGroup[i], target: mayaGroup[j] });
        }
      }

      // Add direct links from karmendriyas to corresponding tanmātras
      links.push(
        { source: '22_vak', target: '27_sabda' }, // speech → sound
        { source: '23_pani', target: '28_sparsa' }, // hand → touch
        { source: '24_pada', target: '29_rupa' }, // foot → form
        { source: '25_upastha', target: '30_rasa' }, // genitals → taste
        { source: '26_payu', target: '31_gandha' }, // anus → smell
      );

      // Add direct links from jñānendriyas (organs of perception) to their corresponding tanmātras
      links.push(
        { source: '17_srotra', target: '27_sabda' }, // ear → sound
        { source: '18_tvak', target: '28_sparsa' }, // skin → touch
        { source: '19_caksus', target: '29_rupa' }, // eye → form
        { source: '20_jihva', target: '30_rasa' }, // tongue → taste
        { source: '21_ghrana', target: '31_gandha' }, // nose → smell
      );

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          'link',
          d3
            .forceLink(links)
            .id((d: any) => d.id)
            .distance((link: any) => {
              // Shorten link distance for leaf nodes (indriyas and tanmātras)
              const leafTargets = [
                '17_srotra',
                '18_tvak',
                '19_caksus',
                '20_jihva',
                '21_ghrana',
                '22_vak',
                '23_pani',
                '24_pada',
                '25_upastha',
                '26_payu',
                '27_sabda',
                '28_sparsa',
                '29_rupa',
                '30_rasa',
                '31_gandha',
                '32_akasa',
                '33_vayu',
                '34_tejas',
                '35_apas',
                '36_prthivi',
              ];
              // Some links use string ids, some use objects, so ensure we get the id
              const targetId =
                typeof link.target === 'object' && link.target.id ? link.target.id : link.target;
              return leafTargets.includes(targetId) ? 80 : 80;
            }),
        )
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2));

      const link = svg
        .append('g')
        .attr('stroke', '#ccc')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', 1.5);

      const node = svg
        .append('g')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .selectAll<SVGCircleElement, TattvaNode>('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 20)
        .attr('fill', (d) => d.color || 'steelblue')
        .call(
          d3
            .drag<SVGCircleElement, TattvaNode>()
            .on('start', (event, d) => {
              if (!event.active) simulation.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
            })
            .on('drag', (event, d) => {
              d.fx = event.x;
              d.fy = event.y;
            })
            .on('end', (event, d) => {
              if (!event.active) simulation.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            }),
        );

      this.updateHighlights();

      node.on('click', (event, d) => {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.innerHTML = `<div><strong>${d.label}</strong></div><div style="font-size:20px;">${d.symbol || ''}</div>`;
        tooltip.style.display = 'block';
        event.stopPropagation();
      });

      svg.on('click', () => {
        tooltip.style.display = 'none';
      });

      const label = svg
        .append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .attr('text-anchor', 'middle')
        .attr('dy', 4)
        .text((d) => d.symbol || d.label)
        .style('font-size', '14px')
        .style('pointer-events', 'none');

      simulation.on('tick', () => {
        // Clamp node positions within boundaries (with 30px margin)
        nodes.forEach((node) => {
          node.x = Math.max(30, Math.min(width - 30, node.x!));
          node.y = Math.max(30, Math.min(height - 30, node.y!));
        });

        link
          .attr('x1', (d) => (d.source as any).x)
          .attr('y1', (d) => (d.source as any).y)
          .attr('x2', (d) => (d.target as any).x)
          .attr('y2', (d) => (d.target as any).y);

        node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);
        label.attr('x', (d) => d.x!).attr('y', (d) => d.y!);
      });
    }
  }

  updateHighlights() {
    const groupMap: Record<string, string[]> = {
      mayaGroup: ['07_kala', '08_niyati', '09_raga', '10_vidya', '11_kala', '12_purusa'],
      jñānendriyas: ['17_srotra', '18_tvak', '19_caksus', '20_jihva', '21_ghrana'],
      tanmatras: ['27_sabda', '28_sparsa', '29_rupa', '30_rasa', '31_gandha'],
      mahabhutas: ['32_akasa', '33_vayu', '34_tejas', '35_apas', '36_prthivi'],
      karmendriyas: ['22_vak', '23_pani', '24_pada', '25_upastha', '26_payu'],
      antahkarana: ['14_buddhi', '15_ahamkara', '16_manas'],
    };

    const activeIds = new Set<string>();
    this.highlightedGroups.forEach((group) => {
      groupMap[group]?.forEach((id) => activeIds.add(id));
    });

    d3.selectAll('circle')
      .attr('stroke', (d: any) => (activeIds.has(d.id) ? 'gold' : '#fff'))
      .attr('stroke-width', (d: any) => (activeIds.has(d.id) ? 5 : 1.5))
      .attr('fill-opacity', (d: any) => (activeIds.has(d.id) ? 1 : 0.4))
      .attr('r', (d: any) => (activeIds.has(d.id) ? 26 : 20));
  }
}
