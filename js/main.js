$(document).ready(function(){

    // Slider

    if(window.location.href.indexOf('index.html') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false
        });
    }
    

    // Posts
    if(window.location.href.indexOf('index.html') > -1) {
        var posts = [
            {
                title: 'Primer Post',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a sem sem. Pellentesque eu interdum urna. Vestibulum vitae neque vel ex volutpat rhoncus ut in tellus. Aenean condimentum eros lectus, ut mollis nulla tincidunt interdum. Pellentesque id nulla nec neque interdum ornare ac quis lectus. Nulla eu varius nisl, et ultrices arcu. Vivamus eget mollis dui. Ut cursus libero lobortis, vehicula nulla eget, pulvinar arcu. Sed efficitur dolor sit amet ultrices lobortis. Suspendisse cursus porttitor vestibulum. Suspendisse vestibulum varius dictum. Maecenas dictum eros pharetra pulvinar porttitor. Fusce ut varius purus. Sed consequat arcu augue, et interdum ligula blandit a. Curabitur molestie risus faucibus risus porta volutpat.'
            },
            {
                title: 'Segundo Post',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a sem sem. Pellentesque eu interdum urna. Vestibulum vitae neque vel ex volutpat rhoncus ut in tellus. Aenean condimentum eros lectus, ut mollis nulla tincidunt interdum. Pellentesque id nulla nec neque interdum ornare ac quis lectus. Nulla eu varius nisl, et ultrices arcu. Vivamus eget mollis dui. Ut cursus libero lobortis, vehicula nulla eget, pulvinar arcu. Sed efficitur dolor sit amet ultrices lobortis. Suspendisse cursus porttitor vestibulum. Suspendisse vestibulum varius dictum. Maecenas dictum eros pharetra pulvinar porttitor. Fusce ut varius purus. Sed consequat arcu augue, et interdum ligula blandit a. Curabitur molestie risus faucibus risus porta volutpat.'
            },
            {
                title: 'Tercer Post',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a sem sem. Pellentesque eu interdum urna. Vestibulum vitae neque vel ex volutpat rhoncus ut in tellus. Aenean condimentum eros lectus, ut mollis nulla tincidunt interdum. Pellentesque id nulla nec neque interdum ornare ac quis lectus. Nulla eu varius nisl, et ultrices arcu. Vivamus eget mollis dui. Ut cursus libero lobortis, vehicula nulla eget, pulvinar arcu. Sed efficitur dolor sit amet ultrices lobortis. Suspendisse cursus porttitor vestibulum. Suspendisse vestibulum varius dictum. Maecenas dictum eros pharetra pulvinar porttitor. Fusce ut varius purus. Sed consequat arcu augue, et interdum ligula blandit a. Curabitur molestie risus faucibus risus porta volutpat.'
            },
            {
                title: 'Cuarto Post',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a sem sem. Pellentesque eu interdum urna. Vestibulum vitae neque vel ex volutpat rhoncus ut in tellus. Aenean condimentum eros lectus, ut mollis nulla tincidunt interdum. Pellentesque id nulla nec neque interdum ornare ac quis lectus. Nulla eu varius nisl, et ultrices arcu. Vivamus eget mollis dui. Ut cursus libero lobortis, vehicula nulla eget, pulvinar arcu. Sed efficitur dolor sit amet ultrices lobortis. Suspendisse cursus porttitor vestibulum. Suspendisse vestibulum varius dictum. Maecenas dictum eros pharetra pulvinar porttitor. Fusce ut varius purus. Sed consequat arcu augue, et interdum ligula blandit a. Curabitur molestie risus faucibus risus porta volutpat.'
            },
            {
                title: 'Quinto Post',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a sem sem. Pellentesque eu interdum urna. Vestibulum vitae neque vel ex volutpat rhoncus ut in tellus. Aenean condimentum eros lectus, ut mollis nulla tincidunt interdum. Pellentesque id nulla nec neque interdum ornare ac quis lectus. Nulla eu varius nisl, et ultrices arcu. Vivamus eget mollis dui. Ut cursus libero lobortis, vehicula nulla eget, pulvinar arcu. Sed efficitur dolor sit amet ultrices lobortis. Suspendisse cursus porttitor vestibulum. Suspendisse vestibulum varius dictum. Maecenas dictum eros pharetra pulvinar porttitor. Fusce ut varius purus. Sed consequat arcu augue, et interdum ligula blandit a. Curabitur molestie risus faucibus risus porta volutpat.'
            }
        ];

        posts.forEach((post, index) => {
            let postHTML = `
                <article class="post">
                    <h2>${post.title}</h2>
                    <span class="date">${post.date}</span>
                    <p>
                        ${post.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(postHTML);

        });
    };

    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web

    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    })

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        $("#about p").html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
    }

    // Acordeon

    if(window.location.href.indexOf('about.html') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj

    if(window.location.href.indexOf('reloj.html') > -1) {
        setInterval(function(){
            $("#reloj").html(moment().format("hh:mm:ss"));

        }, 1000);
        
    }

    // Validacion

    if (window.location.href.indexOf('contact.html') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        })

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
    
    
})