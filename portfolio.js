function sendMail() {
    var parms = {
        name : document.getElementById("name1").value ,
        email : document.getElementById("email1").value ,
        message : document.getElementById("message1").value ,
        phone : document.getElementById("phone1").value 
    } 

    const serviceID ="service_23qbh77";
    const templateID ="template_lozinv4";


    emailjs
    .send(serviceID,templateID,parms)
    .then( res => {
        document.getElementById("name1").value = "" ;
        document.getElementById("email1").value = "";
        document.getElementById("message1").value = "";
        document.getElementById("phone1").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");    
    })
    .catch((err) => console.log(err)); 
}




document.addEventListener('DOMContentLoaded', function() {
    
  
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-element.before-reveal {
            opacity: 0;
        }

        .reveal-element.before-reveal.from-left {
            transform: translateX(-30px);
        }

        .reveal-element.before-reveal.from-right {
            transform: translateX(30px);
        }

        .reveal-element.before-reveal.from-bottom {
            transform: translateY(30px);
        }

        .reveal-element.before-reveal.fade-only {
            transform: none;
        }

        .reveal-element.before-reveal.scale-in {
            transform: scale(0.95);
        }

        .reveal-element.revealed {
            opacity: 1;
            transform: none;
        }

        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    const elementsToReveal = [
        { selector: '.me', animation: 'from-left' },
        { selector: '.txt1', animation: 'fade-only' },
        { selector: '.txt2', animation: 'from-bottom' },
        
        { selector: '.skilltxt', animation: 'scale-in' },
        { selector: '.grd1', animation: 'from-bottom', stagger: true },
        
        { selector: '.hpro', animation: 'fade-only' },
        { selector: '.box1', animation: 'from-bottom' },
        { selector: '.box2', animation: 'from-bottom' },
        { selector: '.box3', animation: 'from-bottom' },
        
        { selector: '.contact-title', animation: 'from-bottom' },
        { selector: '.address', animation: 'from-bottom' },
        { selector: '.freelance', animation: 'from-bottom' },
        { selector: '.email', animation: 'from-bottom' },
        { selector: '.phone', animation: 'from-bottom' },
        { selector: '.contact-form', animation: 'from-right' }
    ];

    elementsToReveal.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach((element, index) => {
            element.classList.add('reveal-element', 'before-reveal', config.animation);
            
            if (config.stagger && elements.length > 1) {
                const delayClass = `reveal-delay-${Math.min(index + 1, 6)}`;
                element.classList.add(delayClass);
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('before-reveal');
                entry.target.classList.add('revealed');
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach(element => {
            observer.observe(element);
        });
    });

    console.log('✨ Scroll reveal animations loaded - your layout is preserved!');
});
