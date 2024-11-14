$(function(){
    $("form[name=register]").validate({
        rules:{
            fname: 'required',
            lname : 'required',
            email:{
                required : true,
                email : true
            },
            pword:{
                required : true,
                minlength : 8
            },
            rpword :{
                required : true,
                equalTo:"pword",
                minlength : 8

            }
        },

        messages:{
            fname : "Please Enter Your Name",
            lname : "Please Enter Your Last Name",
            email:{
                required :"Email is required!",
                emai:"not Valid Email"
            },
            pword:{
                required:"Password is required",
                minlength:"at least 8 Characters"
            },
            rpword:{
                required:"Confirm password is require",
                equalTo : "doesn't match the password",
                minlength:"at least 8 Characters"
            }

        }
    })
});


$(function(){
    $("form[name=login]").validate({
        rules:{
            email:{
                required : true,
                email : true
            },
            pword :"required"
        },
        
        messages:{
            email:{
                required : "email is required",
                email : "enter a valid email"
            },
            pword:"this field is require"
        }
    })
})