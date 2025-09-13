// DOM 
// Document Object Model
/*
<!DOCTYPE html>
<html>  
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
    </head>
    <body style="background-color: lime;">
        <div class="parent">
            <div class="day">Monday</div>
               <div class="day">Tuesday</div>   
               <div class="day">Wednesday</div>
               <div class="day">Thursday</div>
                <div class="day">Friday</div>
                <div class="day">Saturday</div>
                <div class="day">Sunday</div>           
        </div>
    </body>
    <script>
        const parent= document.querySelector(".parent");
        console.log(parent.children[0].innerText);
        //for(let i=0;i<parent.children.length;i++){
          //  console.log(parent.children[i].innerText);
        //}
        parent.children[0].style.color="red";
        parent.children[1].style.color="blue";
        parent.children[2].style.color="green";
        parent.children[3].style.color="purple";
        parent.children[4].style.color="orange";
        parent.children[5].style.color="brown";
        parent.children[6].style.color="pink";
        //console.log(parent.firstElementChild.innerText);
        //console.log(parent.lastElementChild.innerText);
        //console.log(parent.childElementCount);
        //const dayOne = document.querySelector(".day");
        //console.log(dayOne.parentElement);
        //console.log(dayOne.nextElementSibling.innerText);
        console.log("Nodes: ",parent.childNodes);
    </script>
   
</html>
<!DOCTYPE html>
<html>  
<head>
    <title>DOM Level 2 HTML Example</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color: lightblue;">
   </body>
   <script>
    const div = document.createElement("div");
    console.log(div);
    div.className = "container";
    div.id = "main";
    div.style.backgroundColor = "yellow";
    div.setAttribute("title", "This is a container div");
    div.innerText = "Hello, I am a dynamically created div!";
    div.style.padding = "20px";
    div.style.textAlign = "center";
    document.body.appendChild(div);
    const addTextNode = document.createTextNode(" - Enjoy your stay!");
    div.appendChild(addTextNode);
    console.log(div);
    
   </script>
</html>
<!DOCTYPE html>
<html>  
<head>
    <title>DOM Level 3 HTML Example</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color: lightblue;">
    <ul class="languages">
        <li class="lang">JavaScript</li>
        <li class="lang">Python</li>
        <li class="lang">Java</li>
        <li class="lang">C#</li>
        <li class="lang">Ruby</li>
    </ul>
   </body>
 <script>
    function addLanguage(language) {
        const li = document.createElement("li");
        li.className = "lang";
        li.innerText = `${language}`;
        document.querySelector(".languages").appendChild(li);
    }
    addLanguage("Go");
    addLanguage("Rust");
    function addOptionalLanguage(language) {
       const li = document.createElement("li");
         li.className = "lang";
         const AddText = li.appendChild(document.createTextNode(language));
            document.querySelector(".languages").appendChild(li);
    }
    addOptionalLanguage("TypeScript");
    addOptionalLanguage("Kotlin");

    //Edit
    const sec=document.querySelector("li:nth-child(2)")
    const newli=document.createElement("li");
    newli.textContent="C++";
    sec.replaceWith(newli);

    // Edit 
    const first = document.querySelector("li:nth-child(1)");
    first.outerHTML="<li class='lang'>HTML</li>";

    // Remove
    const last=document.querySelector("li:nth-child(6)");
    last.remove();
   </script>
  
</html>


*/