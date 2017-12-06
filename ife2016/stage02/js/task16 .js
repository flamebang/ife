(function() {
  var aqiData = {};
  // 从用户输入中获取数据，向aqiData中增加一条数据
  // 然后渲染aqi-list列表，增加新增的数据
  function addAqiData() {
    var oCity = document.getElementById('aqi-city-input').value;
    var oAir = document.getElementById('aqi-value-input').value;
    var value1 = oCity.match(/^[\u4e00-\u9fa5a-zA-Z]+$/); // 城市名必须为中英文字符
    var value2 = oAir.match(/^([1-9][0-9]*)$/); // 空气质量指数必须为整数(非负数)

    if(!value1) {
      alert("您的输入不符，请输入中英文字符");
    } else if(!value2) {
      alert('空气质量指数必须为整数');
    }

    aqiData[oCity] = oAir;
    var oTable = document.getElementById('aqi-table');
    var oTr = document.createElement('tr');
    oTr.innerHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr><tr><td>'
    // alert(value2)
    // console.log(oCity.value);
    // console.log(oAir.value);
    // console.log(aqiData);
    // alert(aqiData[oCity]);
  }

  // 渲染aqi-table表格
  function renderAqiList() {
    console.log(aqiData);
    var oTable = document.getElementById('aqi-table');
    var oTr = document.createElement('tr');
    alert(oTr.length)
    for(var key in aqiData) {
      oTr.innerHTML = '<tr><td>' + key + '</td><td>' + aqiData[key] + '</td><td><button>删除</button></td></tr>';
      oTable.appendChild(oTr);
    }


  }
  // 点击add-btn时的处理逻辑
  // 获取用户输入，更新数据，并进行页面呈现的更新
  function addBtnHanle() {
    addAqiData();
    renderAqiList();
  }
  // 点击各个删除按钮的时候的处理逻辑
  // 获取哪个城市数据被删，删除数据，更新表格显示
  function delBtnHandle() {

  }
  function init() {
    var oBtn = document.getElementById('add-btn');
    oBtn.onclick = function() {
      addBtnHanle();
    }
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  }

  init();

})();








