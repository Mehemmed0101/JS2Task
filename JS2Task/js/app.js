var date = new Date();
var dawn = 'Seher qrupu';
var afternoon = 'Gunorta qrupu';
var evening = 'Axsam qrupu';
var error = 'Qeyd edilen smen yoxdur';


function Search() {
    var input = document.getElementById('random').value;
    console.log(input);
    var grup = Number(input.slice(-3,-2));
    
    if(input === ''){
        alert('Qrup sehv qeyd edilib!?');
        return;
    }
    switch (grup) {
        case 1:
            document.getElementById('group').innerHTML = dawn;
            document.body.style.backgroundImage = 'url(https://guidedazerbaijan.com/wp-content/uploads/2019/08/old-city-baku.jpg)';
            break;
        case 2:
            document.getElementById('group').innerHTML = afternoon;
            document.body.style.backgroundImage = 'url(https://feat.az/uploads/posts/2016-06/1466613055_hi8qqos.jpg)';
            break;
        case 3:
            document.getElementById('group').innerHTML = evening;
            document.body.style.backgroundImage = 'url(https://maraqli-sekiller.com/uploads/posts/2019-04/medium/maraqli-sekiller.com_gece-menzeresi-341-1.jpg)';
            break;
        default:
            document.getElementById('group').innerHTML = error;
            document.body.style.backgroundImage = 'url(https://www.shutterstock.com/image-vector/error-message-red-vector-icon-260nw-1184478349.jpg)';
            break;
        }
        
    }
