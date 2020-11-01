

        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready)
        } else {
            ready()
        }

        function ready() {
            var removeCartItemButtons = document.getElementsByClassName('btn-danger')
            for (var i = 0; i < removeCartItemButtons.length; i++) {
                var button = removeCartItemButtons[i]
                button.addEventListener('click', removeCartItem)
            }
        }

        function removeCartItem(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
        }

         //by using only one function for the for all product

         function handleProductChange(product ,isIncrease){

            const productInput = document.getElementById(product +'-count');
            const productCount = parseInt(productInput.value);
            
            let productCountNew = productCount;
            if(isIncrease == true){
              productCountNew = productCount+1;
            }
            if(isIncrease==false && productCount>0){
              productCountNew = productCount-1;
            }
            productInput.value = productCountNew;
           //  const productTotal = productCountNew*59;
           let productTotal = 0;
           if(product=='phone'){
              productTotal = productCountNew*4750;
              calculateTotal();
           }
           if(product=='case'){
              productTotal=productCountNew*135;
              calculateTotal();
           }
            document.getElementById(product +'-total').innerText = productTotal;
            document.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
         };     

           
        function wishlist(x) {
            x.classList.toggle("fa-heart-o");
            } 

         function calculateTotal(){
            
            const phoneCount = getInputValue('phone');

            const caseCount = getInputValue('case');

            const totalPrice = phoneCount*4750 + caseCount*135;
            document.getElementById('sub-total').innerText = totalPrice;

            //tax
            const tax = Math.round(totalPrice*0.1);
            document.getElementById('tax').innerText = tax;

            const total = totalPrice+tax;
            document.getElementById('total').innerText = total;
         }   

         function getInputValue(product){
            const productInput = document.getElementById(product+'-count');
            const productCount = parseInt(productInput.value);
            return productCount;
         }

         //checkout page
         document.getElementById('checkout').addEventListener('click', function(){
            document.getElementById('check-page').style.display="block" ;
            document.getElementById('main-page').style.display = "none";
         });
        
