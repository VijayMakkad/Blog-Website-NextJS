import {DiscussionEmbed} from "disqus-react"

const Comments = () => { 
const disqusShortname = "Demo-GfG"

const disqusConfig = { 
	url: "http://localhost:3000", 
	identifier:'123', 
	title: "Demo Post"
} 

return ( 
	<div className="m-20  border-solid border-black border-2 p-5 rounded-lg"> 
	<DiscussionEmbed 
		shortname={disqusShortname} 
		config={disqusConfig} 
	/> 
	</div> 
) 
} 

export default Comments;
