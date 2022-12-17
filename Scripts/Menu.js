export default class Menu{
  constructor(Btn,Outside){
    this.Btn = document.querySelectorAll(Btn);
    this.Outside = document.querySelector(Outside);
    this.HandleClick = this.HandleClick.bind(this);
    this.HandleClickOutSide = this.HandleClickOutSide.bind(this);
  }

  // Ao clicar no botão de abri/fechar menu
  // Adiconamos um EventListener ao background
  // Para detectar clicks fora do menu
  // Removendo o EventListener para otimização
  HandleClickOutSide(event){
    if(event.target == this.Outside){
      this.Btn[0].classList.remove('click');
      this.Outside.removeEventListener('touchstart', this.HandleClickOutSide);
    }
  }

  // Adicionamos/Removemos a classe click ao clicar
  // Verificamos se o click foi no botão de abrir o menu
  HandleClick(event){
    event.currentTarget.classList.toggle('click');
    if(this.Outside){
      this.Outside.addEventListener('touchstart', this.HandleClickOutSide);
    }
  }

  // Verificamos se existe itens na NodeList
  // Adicionamos o evento de click em todos botões necessários
  init(){
    if(this.Btn.length)
    this.Btn.forEach(btn =>{
      btn.addEventListener("click", this.HandleClick);
    })
      return this;
  }
}