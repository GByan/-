// var num = '11.22.33.44';
// var arr = num.split('.');
// arr.map((e)=>{
//   var a = 11;
//   e += a;
//   retrun
// })
// console.log(arr);
// console.log(Cats[1].name);
// document.body.innerHTML = '';
//
// var nums = [1,2,3];
//
// // 循环遍历数组中的每一个数
// for (var i = 0; i < nums.length; i++) {
//
//    // 这是数组循环中当前的数值...
//    var num = nums[i];
//
//    // 我们为这个数创建了一个 DOM 元素
//    var elem = document.createElement('div');
//    elem.textContent = num;
//
//    // ... 然后当我们点击 (click) 的时候，提示这个数字
//    elem.addEventListener('click', (function(numCopy) {
//       return function() {
//       alert(numCopy);
//       };
//    })(num));
//
//    document.body.appendChild(elem);
//
// };
$(function(){
  let Cats = [];
  class cat{
    constructor(name,num = 0){
      this.name = name;
      this.clickNum = num;
      Cats.push(this);
    }
    AddclickNum(mow){
      this.clickNum +=1;
      // const num = this.clickNum;
      console.log(mow);
      $(mow).siblings('#cat_clicknum').text(this.clickNum);
    }
  }
  cat1 = new cat('Tom',0);
  cat2 = new cat('Jack',0);
  cat3 = new cat('Jerry',0)
  cat4 = new cat('Marry',0)
  cat5 = new cat('Teddy',0)
  $('#cat_list li').each(function(e){
    const name = Cats[e].name;
    $(this).children('#cat_name').text(name);
  });
  $('#choose_List li').each(function(e){
    const name = Cats[e].name;
    $(this).children().text(name);
  });
  $("#cat_list li").on('click',function(e){
    let cat = e.target.id;
    let mow = `#${cat}`;
    switch (cat) {
      case 'cat1':
        cat1.AddclickNum(mow);
        break;
      case 'cat2':
        cat2.AddclickNum(mow);
        break;
      case 'cat3':
        cat3.AddclickNum(mow);
        break;
      case 'cat4':
        cat4.AddclickNum(mow);
        break;
      case 'cat5':
        cat5.AddclickNum(mow);
        break;
    }
  })
  $('#choose_List li').on('click',function(e){
    console.log('click')
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    let choice = $(this).data('id');
    const one = `.${choice}`
    $(one).removeClass('unshow');
    $(one).siblings().addClass('unshow');
  })
})
