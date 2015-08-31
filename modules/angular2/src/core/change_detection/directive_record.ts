import {StringWrapper, normalizeBool, isBlank} from 'angular2/src/core/facade/lang';
import {isDefaultChangeDetectionStrategy, ChangeDetectionStrategy} from './constants';

export class DirectiveIndex {
  constructor(public elementIndex: number, public directiveIndex: number) {}

  get name() { return `${this.elementIndex}_${this.directiveIndex}`; }
}

export class DirectiveRecord {
  directiveIndex: DirectiveIndex;
  callAfterContentChecked: boolean;
  callOnChanges: boolean;
  callDoCheck: boolean;
  callOnInit: boolean;
  changeDetection: ChangeDetectionStrategy;

  constructor({directiveIndex, callAfterContentChecked, callOnChanges, callDoCheck, callOnInit,
               changeDetection}: {
    directiveIndex?: DirectiveIndex,
    callAfterContentChecked?: boolean,
    callOnChanges?: boolean,
    callDoCheck?: boolean,
    callOnInit?: boolean,
    changeDetection?: ChangeDetectionStrategy
  } = {}) {
    this.directiveIndex = directiveIndex;
    this.callAfterContentChecked = normalizeBool(callAfterContentChecked);
    this.callOnChanges = normalizeBool(callOnChanges);
    this.callDoCheck = normalizeBool(callDoCheck);
    this.callOnInit = normalizeBool(callOnInit);
    this.changeDetection = changeDetection;
  }

  isDefaultChangeDetection(): boolean {
    return isDefaultChangeDetectionStrategy(this.changeDetection);
  }
}
