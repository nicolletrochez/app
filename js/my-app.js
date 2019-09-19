// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/eventos/',
    	url: 'eventos.html',
    	name: 'eventos',
  		},
		{
		path: '/Afiliados/',
    	url: 'afiliados.html',
    	name: 'Afiliados',
  		},
		{
		path: '/uvicanights/',
    	url: 'uvicanights.html',
    	name: 'Uvica Nights',
  		},
		{
		path: '/compra boletos/',
    	url: 'compra boletos.html',
    	name: 'compraboletos',
  		},
		{
		path: '/team/',
    	url: 'team.html',
    	name: 'team',
  		},
		
		{
		path: '/inicio/',
    	url: 'inicio.html',
    	name: 'inicio',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

