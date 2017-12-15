/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
import { ArrayEditor } from "./array-editor";

// @ts-ignore
export function arrayEditorTemplateHtml(this: ArrayEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.errorMessage ? _vm.theme.errorRow : _vm.theme.row},[_c('h3',[_vm._v(_vm._s(_vm.titleToShow)),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyleString)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),(true)?_c('icon',{attrs:{"text":_vm.collapsed ? _vm.icon.expand : _vm.icon.collapse,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.collapseOrExpand()}}}):_vm._e(),(_vm.hasAddButton)?_c('icon',{attrs:{"text":_vm.icon.add,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.addItem()}}}):_vm._e(),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description,"notEmpty":true}}),_c('div',{class:_vm.theme.rowContainer},[(_vm.showFilter)?_c('div',{class:_vm.theme.row},[_c('input',{class:_vm.theme.formControl,domProps:{"value":_vm.filter},on:{"change":function($event){_vm.onFilterChange($event)},"keyup":function($event){_vm.onFilterChange($event)}}})]):_vm._e(),_vm._l((_vm.filteredValues),function(item){return _c('div',{key:(1 + item.i) * _vm.renderSwitch,class:_vm.theme.rowContainer,attrs:{"data-index":item.i}},[_c('editor',{attrs:{"schema":_vm.schema.items,"title":item.i,"initial-value":_vm.value[item.i],"theme":_vm.theme,"icon":_vm.icon,"locale":_vm.locale,"required":true,"readonly":_vm.isReadOnly,"has-delete-button":true,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"force-https":_vm.forceHttps},on:{"update-value":function($event){_vm.onChange(item.i, $event)},"delete":function($event){_vm.onDeleteFunction(item.i)}}})],1)})],2),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.errorMessage}})],1)}
// tslint:enable
