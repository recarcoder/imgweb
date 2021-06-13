function sid() {

            document.querySelector('.sidenav').style.display = 'grid';

            document.querySelector('#wrg').style.display = 'grid';

            document.querySelector('.total').style.display = 'grid';

        }

        function remove() {

            document.querySelector('.sidenav').style.display = 'none';

            document.querySelector('#wrg').style.display = 'none';

            document.querySelector('.total').style.display = 'none';

        }

      window.addEventListener('scroll',function got(){

		var	height = 	document.body.offsetHeight-650;

	document.getElementById('train').style.width = 	Math.floor(((window.scrollY*100)/height))+'%';

		});
