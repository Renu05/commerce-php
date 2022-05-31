"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[1825],{44405:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a=n(87462),o=n(63366),m=(n(15007),n(64983)),i=n(91515),d=n(37259),r=["components"],l={},p={_frontmatter:l},s=i.Z;function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,m.mdx)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"about-component-file-structure"},"About component file structure"),(0,m.mdx)("p",null,"One of the first things you can do to get started with component development is to understand and set up the file system. Each type of component has a ",(0,m.mdx)("em",{parentName:"p"},"different file structure"),", although all components require certain files."),(0,m.mdx)("p",null,"In addition, you can choose the component root directory to start development. The following sections have more information."),(0,m.mdx)("h2",{id:"root-directory-location"},"Root directory location"),(0,m.mdx)(d.default,{mdxType:"Docs"}),(0,m.mdx)("h2",{id:"required-files"},"Required files"),(0,m.mdx)("p",null,"The following files are required for all components:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"registration.php"),": Among other things, this file specifies the directory in which the component is installed by vendors in production environments. By default, Composer automatically installs components in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"<Application root dir>/vendor")," directory. For more information, see ",(0,m.mdx)("a",{parentName:"li",href:"../build/component-registration.md"},"Component registration"),"."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"composer.json"),": Specifies component dependencies and other metadata. For more information, see ",(0,m.mdx)("a",{parentName:"li",href:"../build/composer-integration.md"},"Composer integration"),".")),(0,m.mdx)("p",null,"Each component has an additional component-specific required file:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Component Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required file"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"magento2-module")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"../../architecture/modules/dependencies.md#managing-module-dependencies"},"module.xml")),(0,m.mdx)("td",{parentName:"tr",align:null},"This file defines basic information about the component, such as component dependencies and version number. Adobe Commerce and Magento Open Source use the version number to determine which schema and data to update when executing ",(0,m.mdx)("inlineCode",{parentName:"td"},"bin/magento setup:upgrade"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"magento2-theme")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare"},"theme.xml")),(0,m.mdx)("td",{parentName:"tr",align:null},"Describes the theme. File specifies a theme name in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"title")," node, a parent theme (optional), and a theme preview image (optional) in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"media/preview_image")," node.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"magento2-language")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-i18n.html#m2devgde-xlate-files"},"language.xml")),(0,m.mdx)("td",{parentName:"tr",align:null},"Declares a language translation package.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-prepare-component-file-structure-md-0ec06fc9c766862719b1.js.map