var phone_adder = document.getElementById('phoneAdder')
var case_adder = document.getElementById('caseAdder')
var phone_remover = document.getElementById('phoneRemover')
var case_remover = document.getElementById('caseRemover')

phone_price = document.getElementById('phonePrice').innerText
phone_price=parseInt(phone_price)
case_price = document.getElementById('casePrice').innerText
case_price=parseInt(case_price)
phone_amount = document.getElementById('phoneAmount').value
phone_amount = parseInt(phone_amount)
case_amount = document.getElementById('caseAmount').value
case_amount = parseInt(case_amount)
beforeTax = document.getElementById('beforeTax').innerText
beforeTax = parseInt(beforeTax)



phone_adder.addEventListener('click',function(){

    
    phone_amount=phone_amount+1
    document.getElementById('phoneAmount').value=phone_amount
    document.getElementById('phonePrice').innerText = phone_price*phone_amount
    
   beforeTax = beforeTax+(phone_price)
    document.getElementById('beforeTax').innerText=beforeTax
    document.getElementById('tax').innerText=(beforeTax*5)/100
    document.getElementById('afterTax').innerText=beforeTax+(beforeTax*5)/100

})
phone_remover.addEventListener('click',function(){

    
   if (phone_amount>1) {
    phone_amount=phone_amount-1
    document.getElementById('phoneAmount').value=phone_amount
    document.getElementById('phonePrice').innerText = phone_price*phone_amount
    
   beforeTax = beforeTax-(phone_price)
    document.getElementById('beforeTax').innerText=beforeTax
    document.getElementById('tax').innerText=(beforeTax*5)/100
    document.getElementById('afterTax').innerText=beforeTax+(beforeTax*5)/100

   }
})


case_adder.addEventListener('click',function(){

    
    case_amount=case_amount+1
    document.getElementById('caseAmount').value=case_amount
    document.getElementById('casePrice').innerText = case_price*case_amount
    
   beforeTax = beforeTax+(case_price)
    document.getElementById('beforeTax').innerText=beforeTax
    document.getElementById('tax').innerText=(beforeTax*5)/100
    document.getElementById('afterTax').innerText=beforeTax+(beforeTax*5)/100

})
case_remover.addEventListener('click',function(){

    if (case_amount>1) {
        case_amount=case_amount-1
    document.getElementById('caseAmount').value=case_amount
    document.getElementById('casePrice').innerText = case_price*case_amount
    
   beforeTax = beforeTax-(case_price)
    document.getElementById('beforeTax').innerText=beforeTax
    document.getElementById('tax').innerText=(beforeTax*5)/100
    document.getElementById('afterTax').innerText=beforeTax+(beforeTax*5)/100
    }
    

})