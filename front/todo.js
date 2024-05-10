
//전체조회 =======================================
function todoList(){
    fetch("http://localhost:3000/todo")
    .then(result => result.json())
    .then(result => {
        console.log(result)
        result.forEach(r => {
            let li = document.createElement('li');
            li.innerText = r.title;
            li.setAttribute('data-no', r.no)
            myUL.appendChild(li);
        });

        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }
        
        // Click on a close button to hide the current list item
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let thisli = this.parentElement;
                console.log(thisli.getAttribute('data-no'));
            var div = this.parentElement;
                div.style.display = "none";
                let no = thisli.getAttribute('data-no')
                fetch("http://localhost:3000/todo/" + no, {
                    method: 'delete',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                })
                .then(result => result.json())
                .then(result => {
                    console.log(result)
                });
            }
        }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            let no = ev.target.dataset.no;
            fetch("http://localhost:3000/todo/" + no, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    // body: 
                })
                .then(result => result.json())
                .then(result => {
                    console.log(result)
                });
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        }, false);
   });
}

todoList();

//등록 =============================================
function newElement() {
    console.log('dd')

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);

    li.appendChild(text);
    if (inputValue === '') {
      alert("내용을 적어주세요");
    } else {
      document.getElementById("myUL").appendChild(li);
      let title = document.getElementById("myInput").value;
        fetch("http://localhost:3000/todo", {
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'title=' + title + '&complete=0' 
        })
        .then(result => result.json())
        .then(result => {
            console.log(result)
        });
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

  }
