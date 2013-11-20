/* code jquery for mod bootstrap and more */

$('.load-average').tooltip({
    placement: 'top',
    trigger: 'hover'
}).tooltip('hide');

$('#popupfilezilla').popover({
    html : true,
    trigger : 'hover',
    content : ' &bull; Cliquer sur ce bouton.<br> &bull; Ouvrir filezilla.<br> &bull; Fichier -> Importer les paramètres.<br> &bull; Sélectionner le fichier filezilla.xml.<br> &bull; C\'est terminé !',
    title : 'Configurer filezilla rapidement !',
    placement : function() {
        var width = $(window).width();
        return width >= 979 ? 'right' : 'top';
    }
});

$('#popuptransdroid').popover({
    html : true,
    trigger : 'hover',
    content : 'Fonctionnalité en cour de développement.<br>La génération du fichier de configuration fonctionne pour ceux qui sont à l\'aise sous android peuvent le copier/coller via leur pc.',
    title : 'Configurer transdroid rapidement !',
    placement : function() {
        var width = $(window).width();
        return width >= 979 ? 'right' : 'top';
    }
});

$(document).on('click', '.popup-delete-user', function ()
{
    var userName = $(this).data('user');
    $('#delete-userName').val(userName);
    $('#target-delete-user').html('<i class="glyphicon glyphicon-trash"></i> Suppression de l\'utilisateur : <strong>'+userName+'</strong>');
});

$('.alert-success').delay(4000).hide('slow');

if ( document.getElementById('blockInfo') && document.getElementById('blockFtp') && document.getElementById('blockRtorrent') && document.getElementById('blockSupport') )
{
    var blockInfo = document.getElementById('blockInfo');
    var blockFtp = document.getElementById('blockFtp');
    var blockRtorrent = document.getElementById('blockRtorrent');
    var blockSupport = document.getElementById('blockSupport');

    if(blockInfo.offsetHeight > blockFtp.offsetHeight)
        blockFtp.style.height = blockInfo.offsetHeight+'px';
    else
        blockInfo.style.height = blockFtp.offsetHeight+'px';

    if(blockRtorrent.offsetHeight > blockSupport.offsetHeight)
        blockSupport.style.height = blockRtorrent.offsetHeight+'px';
    else
        blockRtorrent.style.height = blockSupport.offsetHeight+'px';
}