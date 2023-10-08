"use strict";(self.webpackChunksgz_ui=self.webpackChunksgz_ui||[]).push([[797],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/stories/InputText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputTextBlockWithLabel:()=>InputTextBlockWithLabel,InputTextWithLabel:()=>InputTextWithLabel,InputTextWithPlaceholder:()=>InputTextWithPlaceholder,default:()=>InputText_stories});var _templateObject,_templateObject2,_templateObject3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Shared_styles=__webpack_require__("./src/ui/Shared.styles.ts"),SharedInput_styles=__webpack_require__("./src/ui/Inputs/SharedInput.styles.ts"),InputTextWrapper=(0,styled_components_browser_esm.ZP)(SharedInput_styles.SP)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  ","\n"])),(function(p){return p.isBlocked&&"display:block;"})),InputText_styles_InputText=(0,styled_components_browser_esm.ZP)(SharedInput_styles.II)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  border-radius: ",";\n  background: #fafafa;\n  border: 0.2px solid var(--light-grey);\n  box-shadow: 0.2px 0.2px var(--secondary-color);\n  ","\n"])),(function(p){return(0,SharedInput_styles.wK)(p.borderRadius)}),(function(p){return p.isDisabled&&Shared_styles.k})),InputTextLabel=(0,styled_components_browser_esm.ZP)(SharedInput_styles.__)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  margin-right: 10px;\n  font-family: var(--primary-ff);\n"]))),__jsx=react.createElement,InputText=function InputText(props){var id=props.id,name=props.name,placeholder=props.placeholder,defaultValue=props.defaultValue,value=props.value,label=props.label,_props$isDisabled=props.isDisabled,isDisabled=void 0!==_props$isDisabled&&_props$isDisabled,_props$isReadOnly=props.isReadOnly,isReadOnly=void 0!==_props$isReadOnly&&_props$isReadOnly,_props$isBlocked=props.isBlocked,isBlocked=void 0!==_props$isBlocked&&_props$isBlocked,maxLength=props.maxLength,minLength=props.minLength,_props$borderRadius=props.borderRadius,borderRadius=void 0===_props$borderRadius?"squared":_props$borderRadius,onChange=props.onChange,onBlur=props.onBlur,onFocus=props.onFocus;return __jsx(InputTextWrapper,{isBlocked},label&&__jsx(InputTextLabel,{htmlFor:id},label," :"),__jsx(InputText_styles_InputText,{id,name,type:"text",defaultValue,value,placeholder,disabled:isDisabled,isDisabled,readOnly:isReadOnly,maxLength,minLength,borderRadius,onChange:function handleOnChange(event){onChange&&onChange(event.target.value)},onBlur:function handleOnBlur(event){onBlur&&onBlur(event.target.value)},onFocus:function handleOnFocus(event){onFocus&&onFocus(event.target.value)}}))};InputText.displayName="InputText",InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{isBlocked:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""}}};const InputText_InputText=InputText;try{InputText.displayName="InputText",InputText.__docgenInfo={description:"",displayName:"InputText",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Inputs/InputText/InputText.tsx#InputText"]={docgenInfo:InputText.__docgenInfo,name:"InputText",path:"src/ui/Inputs/InputText/InputText.tsx#InputText"})}catch(__react_docgen_typescript_loader_error){}var _InputTextWithLabel$p,_InputTextWithLabel$p2,_InputTextWithLabel$p3,_InputTextBlockWithLa,_InputTextBlockWithLa2,_InputTextBlockWithLa3,_InputTextWithPlaceho,_InputTextWithPlaceho2,_InputTextWithPlaceho3,InputText_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const InputText_stories={title:"components/Inputs/InputText",component:InputText_InputText,tags:["autodocs"]};var InputTextComponent=function InputTextComponent(_ref){var children=_ref.children;return InputText_stories_jsx("div",{style:{width:"800px",border:"1px solid grey",padding:"20px"}},children)};InputTextComponent.displayName="InputTextComponent";var InputTextWithLabel={args:{defaultValue:"",label:"With Label",borderRadius:"squared",isDisabled:!1,isReadOnly:!1,isBlocked:!1,maxLength:10},render:function render(args){return InputText_stories_jsx(InputTextComponent,null,InputText_stories_jsx(InputText_InputText,args),"max length is 10")}},InputTextBlockWithLabel={args:{defaultValue:"Hello World!",label:"Blocked with Label",placeholder:"",borderRadius:"rounded",isDisabled:!1,isReadOnly:!1,isBlocked:!1},render:function render(args){return InputText_stories_jsx(InputTextComponent,null,InputText_stories_jsx(InputText_InputText,(0,esm_extends.Z)({isBlocked:!0},args)))}},InputTextWithPlaceholder={args:{defaultValue:"",label:"",placeholder:"without blocked & label",borderRadius:"circled",isDisabled:!1,isReadOnly:!1,isBlocked:!1},render:function render(args){return InputText_stories_jsx(InputTextComponent,null,InputText_stories_jsx(InputText_InputText,args))}};InputTextWithLabel.parameters=_objectSpread(_objectSpread({},InputTextWithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InputTextWithLabel$p=InputTextWithLabel.parameters)||void 0===_InputTextWithLabel$p?void 0:_InputTextWithLabel$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    defaultValue: "",\n    label: "With Label",\n    borderRadius: "squared",\n    isDisabled: false,\n    isReadOnly: false,\n    isBlocked: false,\n    maxLength: 10\n  },\n  render: args => <InputTextComponent>\r\n      <InputText {...args} />\r\n      max length is 10\r\n    </InputTextComponent>\n}'},null===(_InputTextWithLabel$p2=InputTextWithLabel.parameters)||void 0===_InputTextWithLabel$p2||null===(_InputTextWithLabel$p3=_InputTextWithLabel$p2.docs)||void 0===_InputTextWithLabel$p3?void 0:_InputTextWithLabel$p3.source)})}),InputTextBlockWithLabel.parameters=_objectSpread(_objectSpread({},InputTextBlockWithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InputTextBlockWithLa=InputTextBlockWithLabel.parameters)||void 0===_InputTextBlockWithLa?void 0:_InputTextBlockWithLa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    defaultValue: "Hello World!",\n    label: "Blocked with Label",\n    placeholder: "",\n    borderRadius: "rounded",\n    isDisabled: false,\n    isReadOnly: false,\n    isBlocked: false\n  },\n  render: args => <InputTextComponent>\r\n      <InputText isBlocked={true} {...args} />\r\n    </InputTextComponent>\n}'},null===(_InputTextBlockWithLa2=InputTextBlockWithLabel.parameters)||void 0===_InputTextBlockWithLa2||null===(_InputTextBlockWithLa3=_InputTextBlockWithLa2.docs)||void 0===_InputTextBlockWithLa3?void 0:_InputTextBlockWithLa3.source)})}),InputTextWithPlaceholder.parameters=_objectSpread(_objectSpread({},InputTextWithPlaceholder.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InputTextWithPlaceho=InputTextWithPlaceholder.parameters)||void 0===_InputTextWithPlaceho?void 0:_InputTextWithPlaceho.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    defaultValue: "",\n    label: "",\n    placeholder: "without blocked & label",\n    borderRadius: "circled",\n    isDisabled: false,\n    isReadOnly: false,\n    isBlocked: false\n  },\n  render: args => <InputTextComponent>\r\n      <InputText {...args} />\r\n    </InputTextComponent>\n}'},null===(_InputTextWithPlaceho2=InputTextWithPlaceholder.parameters)||void 0===_InputTextWithPlaceho2||null===(_InputTextWithPlaceho3=_InputTextWithPlaceho2.docs)||void 0===_InputTextWithPlaceho3?void 0:_InputTextWithPlaceho3.source)})})},"./src/ui/Inputs/SharedInput.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{II:()=>Input,SP:()=>InputWrapper,__:()=>Label,wK:()=>getBorderRadius});var _templateObject,_templateObject2,_templateObject3,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_getGlobalCSS__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/getGlobalCSS.ts"),getBorderRadius=function getBorderRadius(borderRadius){switch(borderRadius){case"circled":return(0,_utils_getGlobalCSS__WEBPACK_IMPORTED_MODULE_0__.o)("--circled");case"rounded":return(0,_utils_getGlobalCSS__WEBPACK_IMPORTED_MODULE_0__.o)("--curved");default:return}},InputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject||(_templateObject=(0,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n"]))),Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.label(_templateObject2||(_templateObject2=(0,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  width: 100%;\n  max-width: 100px;\n  text-align: left;\n"]))),Input=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.input(_templateObject3||(_templateObject3=(0,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  width: 100%;\n  height: 35px;\n  padding: 12px;\n  margin: 5px 0px;\n  border: 1px solid var(--secondary-color);\n  border-radius: var(--rounded);\n  color: var(--black);\n  font-size: var(--body-fs);\n  font-weight: var(--medium-fw);\n\n  :focus {\n    outline: none;\n  }\n  /* Firefox */\n  ::placeholder {\n    color: var(--secondary-color);\n    opacity: 1;\n  }\n  /* Edge 12 -18 */\n  ::-ms-input-placeholder {\n    color: var(--secondary-color);\n  }\n"])))},"./src/ui/Shared.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>DisabledState});var _templateObject,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),DisabledState=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").iv)(_templateObject||(_templateObject=(0,C_Users_tians_Documents_devsandbox_sgz_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  opacity: 0.5;\n  pointer-events: none;\n"])))},"./src/utils/getGlobalCSS.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>getGlobalStyles});var getGlobalStyles=function getGlobalStyles(key){return getComputedStyle(document.body).getPropertyValue(key)}}}]);