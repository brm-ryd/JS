"use	strict";
/**	@class	{emailValidModel}		*/
var	emailValidModel	=	Backbone.Model.extend(/**	@lends
emailValidModel.prototype	*/{
		/**	@type	{Object}	*/
		defaults:	{
				email:	""
		},
		/**
			*	email validation
		*	@param	{String}	email
		*/
		isEmailValid:	function(	email	)	{
				var	pattern	=	/^[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\
{\|\}\~\.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/g;
				return	email.length	&&	pattern.test( email );
      },
		/**
			*	model validation
		*	@param	{Map}	addrs
		*/
		validate:	function(	addrs	)	{
				if	(	!addrs.email	)	{
						return	"Email	is	required.";
				}
				if	(	!this.isEmailValid(	addrs.email	)	)	{
          return	"Invalid	email	address.";
				}
		}
});
