class App{
    constructor(){
        this.search_location = document.querySelector("#search_location");
        this.option = document.querySelector("#option");
        this.search_option = document.querySelector("#search_option");
        this.input_box = document.querySelector("#input_box");
        this.search_input = document.querySelector("#search");

        this.event();
        this.optionBtnSet();
        document.querySelector("#research").addEventListener("click",()=>{this.researchEvent();})
        this.search_input.addEventListener("keydown",(e)=>{this.searchDown(e)});
    }

    event(){
        this.search_option.addEventListener("click",()=>{
            if(this.search_option.classList.contains("open")) this.search_option.classList.remove("open");
            else this.search_option.classList.add("open");
        });
        
        document.querySelectorAll(".open_bc").forEach(x=>{
            x.addEventListener("click",(e)=>{this.makeOp(e.target.dataset.type);});
        });
    }

    makeOp(type){
        let dom = document.createElement("div");
        dom.setAttribute("id","op_bc");
        dom.appendChild(this.makeMore(type));
        document.querySelector("#wrap").appendChild(dom);
        setTimeout(()=>{
            dom.classList.add("open");
            dom.addEventListener("click",()=>{
                document.querySelector("#op_bc").classList.remove("open");
                setTimeout(()=>{
                    document.querySelector("#wrap").removeChild(document.querySelector("#op_bc"));
                },300);
            });
        },100);
    }

    makeMore(type){
        let dom = document.createElement("div");
        dom.setAttribute("id","more_read");
        if(type == "ver"){
            dom.innerHTML=`<h4 id="more_title">Fatch Note</h4>
                            <div id="more_content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam eos labore voluptates consectetur, pariatur recusandae saepe, ab praesentium, voluptatem inventore quaerat ipsum aut veniam beatae soluta. Quam, suscipit obcaecati.
                            </div>`;
        }

        if(type == "what"){
            dom.innerHTML=`<h4 id="more_title">What is the File Mark</h4>
                            <div id="more_content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam eos labore voluptates consectetur, pariatur recusandae saepe, ab praesentium, voluptatem inventore quaerat ipsum aut veniam beatae soluta. Quam, suscipit obcaecati.
                            </div>`;
        }

        if(type == "how"){
            dom.innerHTML=`<h4 id="more_title">How use File Mark</h4>
                            <div id="more_content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam eos labore voluptates consectetur, pariatur recusandae saepe, ab praesentium, voluptatem inventore quaerat ipsum aut veniam beatae soluta. Quam, suscipit obcaecati.
                            </div>`;
        }
        return dom;
    }

    optionBtnSet(){
        document.querySelectorAll("#search_option_box > p").forEach(x=>{
            x.addEventListener("click",(e)=>{this.optionBtnClick(e)});
        });
    }

    optionBtnClick(e){
        document.querySelectorAll("#search_option_box > p").forEach(x=>{
           x.classList.remove("select");
        });

        this.option.value = e.target.dataset.option;
        e.target.classList.add("select");
        document.querySelector("#search_option > span").innerHTML = e.target.dataset.name;

        document.querySelector("#input_box").classList.remove("text");
        document.querySelector("#input_box").classList.remove("date");
        document.querySelector("#input_box").classList.add(e.target.dataset.value);
    }

    searchDown(e){
        if(e.key == "Enter" && e.target.value.trim().length > 0)this.searchProcess(e.target.value);
    }

    searchProcess(val){
        document.querySelector("#search_form").classList.add("close");
        document.querySelector("#search_result_area").classList.remove("close");
        document.querySelector("#search_keyword").innerHTML = val;
        document.querySelector("#search_option").classList.remove("open");
    }
    
    researchEvent(){
        document.querySelector("#search_form").classList.remove("close");
        document.querySelector("#search_result_area").classList.add("close");
        document.querySelector("#search_keyword").innerHTML = "";
    }
}

window.onload = ()=>{
    const app = new App();
}