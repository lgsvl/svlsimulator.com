//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//

export type ComponentSubstitutionKeys =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'thematicBreak' //	Thematic break	***
  | 'blockquote' //	Blockquote	>
  | 'ul' //	List	-
  | 'ol' //	Ordered list	1.
  | 'li' //	List item
  | 'table' //	Table	`---
  | 'tr' //	Table row	`This
  | 'td' // Table cell
  | 'th' // Table header cell
  | 'pre' //	Pre	```js console.log()```
  | 'code' //	Code	`console.log()`
  | 'em' //	Emphasis	_emphasis_
  | 'strong' //	Strong	**strong**
  | 'delete' //	Delete	~~strikethrough~~
  // 'code' | |FC; //	InlineCode	`console.log()`
  | 'hr' //	Break	---
  | 'a' //	Link	https://mdxjs.com or [MDX](https://mdxjs.com)
  | 'img'; //	Image	![alt](https://mdx-logo.now.sh)

export type MdxComponentSubstitutions = Partial<Record<ComponentSubstitutionKeys, React.FC>>;
