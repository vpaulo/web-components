class t extends HTMLElement{constructor(){super(),this._DEFAULT_ICON_SET="icons",this._svgIcon=null,this.icon="",this._iconName="",this._iconSet=void 0,this._iconSetName="",this._shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["icon"]}iconChanged(){const t=this.icon.split(":");this._iconName=t.pop(),this._iconSetName=t.pop()||this._DEFAULT_ICON_SET,this.updateIcon()}updateIcon(){this._iconSet=this.getIconSet(this._iconSetName),this._iconSet&&(this.removeIcon(),this._svgIcon=this._iconSet.applyIcon(this._iconName),this.addIcon())}addIcon(){this._svgIcon&&this._shadow.appendChild(this._svgIcon)}removeIcon(){this._svgIcon&&(this._shadow.removeChild(this._svgIcon),this._svgIcon=null)}getIconSet(t){return document.querySelector(`vp-icon-set[name="${t}"]`)}attributeChangedCallback(t,e,n){n!==e&&(this[t]=n,this[`${t}Changed`]())}connectedCallback(){this._shadow.innerHTML=this.render(),this.addIcon()}render(){return""}}const e=t.prototype.connectedCallback,n=t.prototype.render;Object.assign(t.prototype,{connectedCallback:function(){e&&e.call(this)},render:function(){return this.getStyles()+(n?n.call(this):"")},getStyles:function(){return"<style>:host{display:inline-flex;align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:var(--vp-icon-fill-color, currentcolor);stroke:var(--vp-icon-stroke-color, none);width:var(--vp-icon-width, 20px);height:var(--vp-icon-height, 20px)}:host([hidden]){display:none}</style>"}}),window.customElements.get("vp-icon")||(window.IconElement=t,window.customElements.define("vp-icon",t));
