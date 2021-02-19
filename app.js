const makeNovailoveyouChat = () => {
  const chatBody = document.createElement('div'),
    styleTag = document.createElement('style'),
    body = document.body || document.getElementsByTagName('body')[0],
    head = document.head || document.getElementsByTagName('head')[0]

  const props = {
    step: 0,
    contactWay: 'Telegram',
    callOrPm: 'Позвонить'
  }

  // Styles
  const css = `
    .novailoveyou-chat{
      position: fixed;
      bottom: 0;
      right: 2em;
      font-family: 'Roboto', sans-serif;
      z-index: 10;
      font-size: 16px;
    }

    .novailoveyou-chat__btn{
      padding: 0.4em 2em; 
      display: inline-block; 
      text-decoration: none; 
      border-radius: 0.25em; 
      background-color: #FFA200;
      color: #fff;
    }

    .novailoveyou-chat__modBody{
      position: relative;
      min-width: 23.4375em;
      min-height: 15.125em;
      border-radius: 0.625em 0.625em 0 0;
      box-shadow: 0 0 25px rgb(0 0 0 / 15%);
      background-color: #fff;
    }

    .modBody__close{
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    .modBody__step{
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .modBody__step--one{
      padding: 3em 2em 2em 2em;
    }

    .step--one__textarea{
      height: 3.125em;
      padding: 0.5em 0.9375em;
      border-radius: .3125em;
      margin-bottom: 1.125em;
      font-family: 'Roboto', sans-serif;
    }
    .step--one__textarea::placeholder{
      font-family: 'Roboto', sans-serif;
    }

    .where-to-answer__title{
      margin: 0 0 0.6875em 0;
    }

    .where-to-answer__contact-ways{
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .contact-ways__contact-way{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 31.333333%;
      margin-right: 0.25em;
      margin-bottom: 0.3em;
      border-radius: 0.3125em;
    }

    .contact-way--telegram{
      background-color: #00a3ff;
    }

    .contact-way--whatsapp{
      background-color: #1bc100;
    }

    .contact-way--viber{
      background-color: #9300c7;
    }
    
    .contact-way--vk{
      background-color: #368cdc;
    }

    .contact-way--phone{
      background-color: #0050e3;
    }

    .contact-way--email{
      background-color: #f60;
    }

    .contact-way__contact-way-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2.5625em;
    }

    .step__top{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.9375em;
      position: relative;
      border-radius: 0.625em 0.625em 0 0;
      background-color: #FFA200;
      color: #fff;
    }

    .top__arrow-back{
      position: absolute;
      top: 50%;
      left: 1.5em;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5em;
    }

    .step__body{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2.125em;
      padding-bottom: 2.125em;
    }

    .step--three__body{
      padding-top: 1.29125em;
      padding-bottom: 1.29125em;
    }

    .body__input-group{
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .body__input-group input{
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      height: 2.6875em;
      width: 2.6875em;
      border: .0625em solid #000;
      margin-right: 1.4em;
    }

    .body__input-group label{
      font-size: 1em;
      margin-bottom: 0;
      cursor: pointer;
    }

    .body__input-group:nth-child(1){
      margin-bottom: 0.5625em;
    }

    .body__input-group--step-three{
      display: flex;
      flex-direction: column;
    }

    .body__input-group--step-three label{
      font-size: 0.9em;
      margin-bottom: 0;
    }

    .body__input-group--step-three input{
      margin-top: .6875em;
      height: 2.6875em;
      font-size: 1em;
      padding: 0 0.9375em;
      border-radius: .3125em;
      box-shadow: none;
      border: .0625em solid #000;
    }

    .novailoveyou-submit-btn{
      margin-top: .6875em;
      width: 100%;
      padding: .9375em;
      border: 0;
      border-radius: 0.3125em;
      background-color: #FFA200;
      color: #fff;
      cursor: pointer;
    }

    .modBody__step--success{
      padding-top: 2.3em;
      justify-content: center;
      align-items: center;
    }

    .step--success__p-thanks{
      margin: 1.0625em 0 0.5em 0;
      font-size: 1.2em;
    }

    .step--success__subp-thanks{
      margin: 0;
      font-size: 0.75em;
      max-width: 38ch;
    }

    .nily-chat-desk-only{
      display: inline-block;
    }

    .nily-chat-mob-only{
      display: none;
    }

    @media only screen and (max-width: 521px) {
      .nily-chat-desk-only{
        display: none
      }
  
      .nily-chat-mob-only{
        display: inline-block;
      }

      .novailoveyou-chat{
        right: 0;
        left: 0;
        width: 100%;
      }

      .novailoveyou-chat__btn{
        padding: 0;
        width: 100%;
        height: 3.3em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0;
      }

      .novailoveyou-chat__btn span{
        margin-right: 0.5em;
      }

      .novailoveyou-chat__modBody{
        min-width: 100%;
      }
    }

    .novailoveyou-hidden{
      display: none
    }

  `

  chatBody.setAttribute('id', 'novailoveyou-chat')
  chatBody.classList.add('novailoveyou-chat')

  chatBody.innerHTML = /* html */ `
    <a 
      href="#!"
      id="novailoveyou-chat__btn" 
      class="novailoveyou-chat__btn"
    >
      <span>Задать вопрос</span>
      <img class="nily-chat-desk-only" src="./novailoveyou-chat-imgs/cursor.svg" alt="Курсор" />
      <img class="nily-chat-mob-only" src="./novailoveyou-chat-imgs/finger.svg" alt="Палец" />
    </a>
    <form id="novailoveyou-chat__modBody" class="novailoveyou-chat__modBody novailoveyou-hidden">
    
      <a href="#!" id="js-nliy-chat-close-btn" class="modBody__close">
        <img id="modBody__close" src="./novailoveyou-chat-imgs/cross.svg" alt="Закрыть"/>
      </a>
    

      <!-- Step 1 -->
      <div id="nily-chat-step-1" class="modBody__step modBody__step--one novailoveyou-hidden">
        <textarea id="step--one__textarea" class="step--one__textarea" type="text" name="mod-question" placeholder="Напишите вопрос..." spellcheck="false" required></textarea>
        <div class="step--one__where-to-answer">
          <p class="where-to-answer__title">Куда ответить:</p>
          <ul class="where-to-answer__contact-ways">
            <li class="contact-ways__contact-way contact-way--telegram">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-telegram">
                <img src="./novailoveyou-chat-imgs/telegram.svg" class="contact-way-btn__img" alt="Telegram"/>
              </a>
            </li>
            <li class="contact-ways__contact-way contact-way--whatsapp">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-whatsapp">
                <img src="./novailoveyou-chat-imgs/whatsapp.svg" class="contact-way-btn__img" alt="Whatsapp"/>
              </a>
            </li>
            <li class="contact-ways__contact-way contact-way--viber">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-viber">
                <img src="./novailoveyou-chat-imgs/viber.svg" class="contact-way-btn__img" alt="Viber"/>
              </a>
            </li>
            <li class="contact-ways__contact-way contact-way--vk">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-vk">
                <img src="./novailoveyou-chat-imgs/vk.svg" class="contact-way-btn__img" alt="VK"/>
              </a>
            </li>
            <li class="contact-ways__contact-way contact-way--phone">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-phone">
                <img src="./novailoveyou-chat-imgs/phone.svg" class="contact-way-btn__img" alt="Телефон"/>
              </a>
            </li>
            <li class="contact-ways__contact-way contact-way--email">
              <a href="#!" class="contact-way__contact-way-btn contact-way-btn-email">
                <img src="./novailoveyou-chat-imgs/email.svg" class="contact-way-btn__img" alt="Email"/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Step 2 -->
      <div id="nily-chat-step-2" class="modBody__step modBody__step--two novailoveyou-hidden">
        <div class="step__top step--two__top">
          <a id="top__arrow-back-step-two" href="#!" class="top__arrow-back">
            <img src="./novailoveyou-chat-imgs/arrow-back.svg" alt="Назад"/>
          </a>
          <span id="nily-step-two-path" class="top__stepsPath"></span>
        </div>
        <div class="step--two__body step__body">
          <div class="body__inner">
            <div class="body__input-group js-nily-chat-callOrPm">
              <input type="radio" id="callOrPm-call" name="callOrPm" value="Позвонить">
              <label for="callOrPm-call">Позвонить</label>
            </div>

            <div class="body__input-group js-nily-chat-callOrPm">
              <input type="radio" id="callOrPm-pm" name="callOrPm" value="Написать">
              <label for="callOrPm-pm">Написать</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div id="nily-chat-step-3" class="modBody__step modBody__step--three novailoveyou-hidden">
        <div class="step__top step--two__top">
          <a id="top__arrow-back-step-three" href="#!" class="top__arrow-back">
            <img src="./novailoveyou-chat-imgs/arrow-back.svg" alt="Назад"/>
          </a>
          <span id="nily-step-three-path" class="top__stepsPath"></span>
        </div>
        <div class="step--three__body step__body">
          <div class="body__inner">
            <div class="body__input-group--step-three">
              <label for="callOrPm-input">Напишите свой ${props.contactWay === 'email' ? 'e-mail' : 'номер'}</label>
              <input 
                type=${props.contactWay === 'email' ? 'email' : 'tel'} 
                id="callOrPm-input" 
                name=${props.contactWay === 'email' ? 'email' : 'number'} 
                placeholder=${props.contactWay === 'email' ? 'example@gmail.com' : '123-456-7890'} required>
            </div>
            <button id="novailoveyou-submit-btn" type="submit" value="Submit" class="novailoveyou-submit-btn">Отправить</button>
          </div>
        </div>
      </div>

      <!-- Step Success -->
      <div id="nily-chat-step-success" class="modBody__step modBody__step--success novailoveyou-hidden">
        <img src="./novailoveyou-chat-imgs/circle-checkmark.svg" alt="Галочка в круге" height="68px" width="68px"/>
        <p class="step--success__p-thanks">Спасибо за заявку!</p>
        <p class="step--success__subp-thanks">Менеджер свяжется с Вами в рабочие дни с Понедельника по Пятницу с 10:00-18:00 МСК</p>
      </div>
      
    </form>
  `

  // Append styles
  head.appendChild(styleTag)
  styleTag.type = 'text/css'
  if (styleTag.styleSheet) {
    // This is required for IE8 and below.
    styleTag.styleSheet.cssText = css
  } else {
    styleTag.appendChild(document.createTextNode(css))
  }

  // Append html
  body.appendChild(chatBody)

  const showStepTwo = (idx) => {
    if (idx === 0) {
      document.getElementById('callOrPm-call').checked = true
      props.callOrPm = 'Позвонить'
    }

    if (idx === 1) {
      document.getElementById('callOrPm-pm').checked = true
      props.callOrPm = 'Написать'
    }

    showNilyChatStep(3)
  }

  const makeArrowBackWork = (prevStep) => {
    const arrowBackStepTwo = document.getElementById('top__arrow-back-step-two')
    const arrowBackStepThree = document.getElementById('top__arrow-back-step-three')

    arrowBackStepTwo.addEventListener('click', function arrowBackStepTwoListener() {
      showNilyChatStep(1)
      arrowBackStepTwo.removeEventListener('click', arrowBackStepTwoListener)
    })

    arrowBackStepThree.addEventListener('click', function arrowBackStepThreeListener() {
      if (prevStep === 1) {
        showNilyChatStep(1)
      }

      if (prevStep === 2) {
        showNilyChatStep(2)
      }
      arrowBackStepThree.removeEventListener('click', arrowBackStepThreeListener)
    })
  }

  const validatePhoneOrEmail = () => {
    const callOrPmInput = document.getElementById('callOrPm-input')
    const callOrPmInputBgc = callOrPmInput.style.backgroundColor
    document.getElementById('novailoveyou-submit-btn').addEventListener('click', () => {
      if (callOrPmInput.value < 4) {
        callOrPmInput.style.backgroundColor = 'rgba(221,86,86,0.4)'
        setTimeout(() => {
          callOrPmInput.style.backgroundColor = callOrPmInputBgc
        }, 2000)
      }
    })
  }

  validatePhoneOrEmail()

  const chatBtn = document.getElementById('novailoveyou-chat__btn')

  let jsNilyChatCallOrPmELset = false

  const showNilyChatStep = (part = 0, idx = null) => {
    const chatModBody = document.getElementById('novailoveyou-chat__modBody')
    const nilyChatStepOne = document.getElementById('nily-chat-step-1')
    const nilyChatStepTwo = document.getElementById('nily-chat-step-2')
    const nilyChatStepThree = document.getElementById('nily-chat-step-3')
    const nilyChatStepSuccess = document.getElementById('nily-chat-step-success')

    const stepsArr = [chatBtn, chatModBody, nilyChatStepOne, nilyChatStepTwo, nilyChatStepThree, nilyChatStepSuccess]

    stepsArr.forEach((step) => {
      step.classList.add('novailoveyou-hidden')
    })

    if (idx === 0) {
      props.contactWay = 'Telegram'
    }

    if (idx === 1) {
      props.contactWay = 'Whatsapp'
    }

    if (idx === 2) {
      props.contactWay = 'Viber'
    }

    if (idx === 3) {
      props.contactWay = 'VK'
    }

    if (idx === 4) {
      props.contactWay = 'phone'
      props.callOrPm = 'Позвонить'
    }

    if (idx === 5) {
      props.contactWay = 'email'
      props.callOrPm = 'Написать'
    }


    if (part === 0) {
      props.step = 0
      chatBtn.classList.remove('novailoveyou-hidden')
    }

    if (part === 1) {
      props.step = 1
      chatModBody.classList.remove('novailoveyou-hidden')
      nilyChatStepOne.classList.remove('novailoveyou-hidden')
    }

    if (part === 2) {
      props.step = 2

      document.getElementById('nily-step-two-path').innerHTML = props.contactWay
      chatModBody.classList.remove('novailoveyou-hidden')
      nilyChatStepTwo.classList.remove('novailoveyou-hidden')

      if (jsNilyChatCallOrPmELset === false) {
        Array.from(document.querySelectorAll('.js-nily-chat-callOrPm')).forEach((radio, idx) => {
          radio.addEventListener('click', () => {
            showStepTwo(idx)
          })
        })
        jsNilyChatCallOrPmELset = true
      }
      makeArrowBackWork()

    }

    if (part === 3) {
      props.step = 3

      document.getElementById('nily-step-three-path').innerHTML = props.contactWay === 'email' ? 'Написать' : props.contactWay === 'phone' ? 'Позвонить' : props.contactWay + ' / ' + props.callOrPm
      chatModBody.classList.remove('novailoveyou-hidden')
      nilyChatStepThree.classList.remove('novailoveyou-hidden')

      if (props.contactWay === 'email' || props.contactWay === 'phone') {
        makeArrowBackWork(1)
      } else {
        makeArrowBackWork(2)
      }

    }

    if (part === 4) {
      props.step = 4
      chatModBody.classList.remove('novailoveyou-hidden')
      nilyChatStepSuccess.classList.remove('novailoveyou-hidden')
    }
  }

  const validateQuestion = () => {
    const textarea = document.getElementById('step--one__textarea')
    textarea.focus()
    if (textarea.value.length <= 3) {
      return false
    } else {
      return true
    }
  }

  let userIsToldToFillUpQuestion = false

  const tellUserToFillUpQuestion = () => {
    const textarea = document.getElementById('step--one__textarea')
    const textareaPlaceholder = textarea.getAttribute('placeholder')
    const textareaBackground = textarea.style.backgroundColor

    if (userIsToldToFillUpQuestion === false) {
      textarea.setAttribute('placeholder', 'Пожалуйста, напишите Ваш вопрос...')
      textarea.style.backgroundColor = 'rgba(221,86,86,0.4)'
      userIsToldToFillUpQuestion = true
      setTimeout(() => {
        textarea.setAttribute('placeholder', textareaPlaceholder)
        textarea.style.backgroundColor = textareaBackground
        userIsToldToFillUpQuestion = false
      }, 3000)
    }

  }

  const closeNilyChat = () => {
    const closeBtn = document.getElementById('js-nliy-chat-close-btn')
    if (closeBtn) {
      showNilyChatStep(0)
      closeBtn.removeEventListener('click', closeNilyChat)
      chatBtn.addEventListener('click', nilyChatIsOpened)
    }
  }

  let showNillyChatStepEventExists = false

  const nilyChatIsOpened = () => {
    showNilyChatStep(1)
    chatBtn.removeEventListener('click', nilyChatIsOpened)

    const contactWayBtns = Array.from(document.querySelectorAll('.contact-way__contact-way-btn'))
    if (showNillyChatStepEventExists === false) {
      contactWayBtns.forEach((btn, idx) => {
        if (idx <= 3) {
          btn.addEventListener('click', function showNilyChatStepTwo() {
            const validation = validateQuestion()
            if (validation === true) {
              showNilyChatStep(2, idx)
            } else {
              tellUserToFillUpQuestion()
            }
          })
        } else {
          btn.addEventListener('click', function showNilyChatStepThree() {
            const validation = validateQuestion()
            if (validation === true) {
              showNilyChatStep(3, idx)
            } else {
              tellUserToFillUpQuestion()
            }
          })
        }
      })
      showNillyChatStepEventExists = true
    }

    const closeBtn = document.getElementById('js-nliy-chat-close-btn')
    if (closeBtn) {
      closeBtn.addEventListener('click', closeNilyChat)
    }

  }

  if (chatBtn) {
    chatBtn.addEventListener('click', nilyChatIsOpened)
  }

}

makeNovailoveyouChat()