function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
       'service_shq3dpm',
       'template_5d9wd2v',
       event.target,
       'QzXk3fkk7BHKSw3Cc'
    ).then(() =>  {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable.  Please contact me directly at loganhuss@gmail.com "
        )
    })
}