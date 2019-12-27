/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core';

@Component({
  selector: '[nz-tree-highlight-node]',
  exportAs: 'nzTreeHighlightNode',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nz-tree-highlight-node.html'
})
export class NzTreeHighlightNodeComponent implements OnInit, OnChanges {
  @Input() nzTreeNode: NzTreeNode;
  @Input() nzSearchValue = '';

  @ViewChild('contentElement', { static: true }) contentElement: ElementRef;

  highlightKeys: string[] = [];

  highlightNode(): void {
    this.highlightKeys = [];
    if (this.nzSearchValue && this.nzTreeNode.title!.includes(this.nzSearchValue)) {
      // match the search value
      const index = this.nzTreeNode.title.indexOf(this.nzSearchValue);
      this.highlightKeys = [
        this.nzTreeNode.title.slice(0, index),
        this.nzTreeNode.title.slice(index + this.nzSearchValue.length, this.nzTreeNode.title.length)
      ];
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.highlightNode();
  }
}
