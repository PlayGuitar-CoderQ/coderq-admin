import React, { FC, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

import { data } from './data';
import appStore from '@/store/model/appStore';

import { Graph } from '@antv/x6';

const Structure: FC = observer(() => {
  const { collapsed } = appStore;
  const container = useRef(null);
  const structureContainers = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const graph = new Graph({
      container: container.current!,
      width: collapsed
        ? structureContainers.current!.clientWidth + 120
        : structureContainers.current!.clientWidth,
      height: structureContainers.current?.clientHeight,
      background: {
        color: '#ffffff', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });
    graph.fromJSON(data);
    console.log(
      structureContainers.current?.clientHeight,
      structureContainers.current?.clientWidth,
    );
  }, [collapsed]);
  return (
    <div className="structure-containers" ref={structureContainers}>
      <div ref={container}></div>
    </div>
  );
});

export default Structure;
