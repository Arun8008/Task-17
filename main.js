let array=[

         {
	      name:"Arun",
		  details:"I'm Mechanical Engineer And I Complete My Studies in 2021.",
       },
	   {
	      name:"Karthick",
		  details:"I'm The Rank Holder Of The University And My College Name Is ",
       },
	   {
	      name:"Marish",
		  details:"I'm The Photographer I Have Own Camera My Name Is Marish But People Call Me Celebrity",
       },
	   {
	    name:"Abinesh",
		  details:"I'm The Photographer I Have Own Camera My Name Is Marish But People Call Me Celebrity",
       },
	   {
	    name:"Arjun",
		  details:"I'm The Photographer I Have Own Camera My Name Is Marish But People Call Me Celebrity",
       },
	   {
	    name:"Ananth",
		  details:"I'm The Photographer I Have Own Camera My Name Is Marish But People Call Me Celebrity",
       },
	   {
	    name:"Jegan",
		  details:"I'm The Photographer I Have Own Camera My Name Is Marish But People Call Me Celebrity",
       },
	    
	   
	  
]

let btn1=document.querySelector("#btn");
let div=document.querySelector(".center");
let head=document.querySelector("#head");
let intro=document.querySelector("#intro");



btn1.addEventListener("click",function(){
	 a=Math.floor(Math.random()*array.length);
	console.log(array[a].name);
	head.innerHTML=(array[a].name);
	intro.innerHTML=(array[a].details)
	div.style.boxShadow="0 0 2px 3px #ccc";
	div.style.padding="30px";
	div.style.marginLeft="500px";
	div.style.marginTop="100px";
	div.style.width="30%";
	div.style.minHeight="160px";
	
})
