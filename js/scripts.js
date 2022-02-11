$(function(){
    $(".carousel").carousel({interval:2000});
    $("#carouselButton").click(function() {
        if ( $("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
})




$(function() {
    'use strict';
    function remoteModal(idModal){
        var vm = this;
        vm.modal = $(idModal);

        if( vm.modal.length == 0 ) {
            return false;
        }

        if( window.location.hash == idModal ){
            openModal();
        }

        var services = {
            open: openModal,
            close: closeModal
        };

        return services;
        ///////////////

        // method to open modal
        function openModal(){
            vm.modal.modal('show');
        }

        // method to close modal
        function closeModal(){
            vm.modal.modal('hide');
        }
    }
    Window.prototype.remoteModal = remoteModal;
});

$(function(){
    window.remoteModal('#loginModal');
});
