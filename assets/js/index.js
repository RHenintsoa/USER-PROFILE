

    fetch('./assets/js/user.json')
    .then(res => res.json())
    .then(user =>{
        user.forEach(element => {
    
                var affichage =`<div class="row user">
                <div class="col-lg-2 col-md-2 col-xs-6 offset-lg-3 offset-md-3 user-picture" id="photo">
                    <img src="`+element.photo+`" alt="profil" class="img-fluid">
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 user-profile">
                    <h2> <span id="nom">`+element.nom+`</span> <span id="prenom">`+element.prenom+`</span></h2>
                    <h3 id="poste">`+element.poste+`</h3>
                    <button class="btn btn-primary" id="show-`+element.id+`"> Détails</button>
                    <div id='details-`+element.id+`' class="details">
                        <p id="description"> 
                        `+element.description+`
                        </p>
                    </div>
                    
                </div>
            </div>`;
            
            $('#user').append(affichage);
            
        });
    })
    .then(function(){
        $('.details').hide();
        var buttons = $('button');
        
        $(buttons).each(function(id,el){
            
            $(el).on('click',function(){
                let key=id+1;
                $('#details-'+key).slideToggle('slow');
        
            });
        })
        
        
    })

    
