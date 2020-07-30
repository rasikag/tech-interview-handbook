(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(6),o=(r(0),r(127)),i={id:"array",title:"Array"},c={unversionedId:"algorithms/array",id:"algorithms/array",isDocsHomePage:!1,title:"Array",description:"Notes",source:"@site/../contents/algorithms/array.md",permalink:"/tech-interview-handbook/algorithms/array",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/array.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Introduction",permalink:"/tech-interview-handbook/algorithms/algorithms-introduction"},next:{title:"Binary",permalink:"/tech-interview-handbook/algorithms/binary"}},s=[{value:"Notes",id:"notes",children:[]},{value:"Arrays are sequences",id:"arrays-are-sequences",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"Is the array sorted or partially sorted? If it is, some form of binary search should be possible. This also usually means that the interviewer is looking for a solution that is faster than O(n)."),Object(o.b)("p",null,"Can you sort the array? Sometimes sorting the array first may significantly simplify the problem. Make sure that the order of array elements do not need to be preserved before attempting a sort."),Object(o.b)("p",null,"For questions where summation or multiplication of a subarray is involved, pre-computation using hashing or a prefix/suffix sum/product might be useful."),Object(o.b)("p",null,"If you are given a sequence and the interviewer asks for O(1) space, it might be possible to use the array itself as a hash table. For example, if the array only has values from 1 to N, where N is the length of the array, negate the value at that index (minus one) to indicate presence of that number."),Object(o.b)("h2",{id:"arrays-are-sequences"},"Arrays are sequences"),Object(o.b)("p",null,"Are there duplicate values in the array, would it affect the answer?"),Object(o.b)("p",null,"When using an index to iterate through array elements, be careful not to go out of bounds."),Object(o.b)("p",null,"Be mindful about slicing or concatenating arrays in your code. Typically, slicing and concatenating arrays require O(n) time. Use start and end indices to demarcate a subarray/range where possible."),Object(o.b)("p",null,"Sometimes you can traverse the array from the right rather than from the left."),Object(o.b)("p",null,"Master the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems"}),"sliding window technique")," that applies to many subarray problems."),Object(o.b)("p",null,"When you are given two arrays to process, it is common to have one index per array (pointer) to traverse/compare the both of them. For example, we use the same approach to merge two sorted arrays."),Object(o.b)("h2",{id:"corner-cases"},"Corner cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Empty sequence"),Object(o.b)("li",{parentName:"ul"},"Sequence with 1 or 2 elements"),Object(o.b)("li",{parentName:"ul"},"Sequence with repeated elements")),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/two-sum/"}),"Two Sum")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"}),"Best Time to Buy and Sell Stock")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/contains-duplicate/"}),"Contains Duplicate")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/product-of-array-except-self/"}),"Product of Array Except Self")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/maximum-subarray/"}),"Maximum Subarray")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/maximum-product-subarray/"}),"Maximum Product Subarray")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"}),"Find Minimum in Rotated Sorted Array")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/search-in-rotated-sorted-array/"}),"Search in Rotated Sorted Array")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/3sum/"}),"3Sum")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/container-with-most-water/"}),"Container With Most Water"))))}u.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),p=a,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return r?n.a.createElement(d,c({ref:t},l,{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);