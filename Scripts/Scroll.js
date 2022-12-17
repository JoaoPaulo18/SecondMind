export default class Scroll{
  constructor(Header, Sections){
    this.Header = document.querySelector(Header);
    this.Sections = document.querySelectorAll(Sections);
    this.HandleScroll = this.HandleScroll.bind(this);
    this.windowHalf = Math.floor(window.innerHeight * 0.6);
  }

  HandleScroll(event){
    if(window.scrollY > 0) this.Header.classList.add('Moved');
    else this.Header.classList.remove('Moved');

      const SectionsPos = Array.from(this.Sections).map((Item)=> Item.getBoundingClientRect().top)
      SectionsPos.forEach((Pos,index) => {
        if(Pos - this.windowHalf <= 0)
        this.Sections[index].classList.add("Visible")      
        else 
        this.Sections[index].classList.remove("Visible")      
      })
  }

  init(){
    if(this.Header && this.Sections.length){
      window.addEventListener('scroll', this.HandleScroll)
      this.HandleScroll()
    }
    return this
  }
}