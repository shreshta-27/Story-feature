let arr = [
    {dp:"https://images.unsplash.com/photo-1749307918200-5e37c3b2fbc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1748426156241-6e5239022c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
{dp:"https://plus.unsplash.com/premium_vector-1749410635343-33ec29cb4357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_vector-1714405716996-280b219fe27f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww"
},
{dp:"https://images.unsplash.com/photo-1745933115134-9cd90e3efcc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1749688913703-6da8893cee7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1743596259979-7c0d026abdcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
{dp:"https://plus.unsplash.com/premium_photo-1748909096652-cbc68cf71d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1749301560225-3032826b9e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
]

var story = document.querySelector("#story")
var clutter = ""
arr.forEach(function(elem,idx){
      clutter += ` <div class="str"><img id="${idx}" src="${elem.dp}" alt=""></div>`
})
story.innerHTML = clutter

story.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
         document.querySelector("#full-screen").style.display = "none"
    },2000)
})

