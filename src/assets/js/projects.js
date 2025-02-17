/*! projects.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard projects JS file
========================================================================== */

$(document).ready(function($){

    "use strict";

    adjustDropdowns();

    $(window).scroll(function () {
        adjustDropdowns();
    })

    function adjustDropdowns() {
        $('.project-card-dropdown').each(function () {
            var $this = $(this);

            if (($(this).offset().top + $(this).height()) >= ($(window).height() - 150)) {
                $($this).addClass("is-up");
            }
            else {
                $($this).removeClass("is-up");
            }
        })
    }

    $('.card-progress').each(function(){
        var progress_value = $(this).attr('data-progress');
        //$(this).css('width', progress_value + '%');
        if (progress_value < 34) {
            $(this).css({
                'width': progress_value + '%',
                'background-color': '#536dfe',
            })
        }
        if (progress_value > 33) {
            $(this).css({
                'width': progress_value + '%',
                'background-color': '#00D1B2',
            })
        }
        if (progress_value > 66) {
            $(this).css({
                'width': progress_value + '%',
                'background-color': '#7F00FF',
            })
        }

    })

    //
    $(function() {
        $(".checklist-wrapper").sortable({
            connectWith: ".delete-drop",
            handle: '.checklist-handle',
            start: function(e) {
                $('.delete-drop').slideDown('fast');
            },
            stop: function( ) {
                $('.delete-drop').slideUp('fast');
            }
        }).disableSelection();

    });

    $('.delete-drop').sortable({
        placeholder: 'deletingPlaceholder',
        update: function (event, ui) {
            ui.item.hide();
            // Do what you need to to delete the item from the database
        }
    });

    /*$('.checklist-item').droppable({
        accept : '.delete-drop', // je n'accepte que le bloc ayant "drag" pour id
        drop : function(){
            $(this).remove();
        }
    });*/

    /*$( ".checklist-item" ).draggable({
        connectToSortable: ".checklist-wrapper",
        helper: "clone",
        revert: "invalid",
        handle: '.checklist-handle'
    });*/

    //
    /*$('.checklist-handle').on('mouseup', function(){
        $('.delete-drop').slideDown('fast');
    })*/
    /*$('.checklist-handle').on('mousedown', function(){
        $('.delete-drop').slideUp('fast');
    })*/

})