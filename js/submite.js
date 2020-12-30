const {
	Query,
	User
} =AV;

AV.init({
	appId: "WX6VazCjPrOWsMtrYoIiPkED-MdYXbMMI",
	appKey: "57HhR4cwTyXmXaTSzfmgcuqV"
});

function submite(){
    var names=document.getElementById("name").value;
    var prices=document.getElementById("price").value;
	const Price = AV.Object.extend('price');
    const price = new Price();
    price.set('name',names);
    price.set('price',prices);
    price.set('time',Date());
    price.save().then((price)=>{
        document.getElementById("rule").innerHTML="<button type='button' onclick='del()'>x</button> 登记成功!";
    },(error)=>{
        document.getElementById("rule").innerHTML="<button type='button' onclick='del()'>x</button> 登记失败!";
    });
}
function del(){
    document.getElementById("rule").innerHTML="";
}