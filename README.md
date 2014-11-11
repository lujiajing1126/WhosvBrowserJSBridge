## Whosv浏览器

### 接口定义

  - toString
  - getVersionName
  - getUserId
  - getUserName
  
### 使用

```javascript
window.WhosvBrowserApi.ready(function(){
	var str = WhosvBrowserApi.toString();
	alert(str);
	alert(WhosvBrowserApi.getUserId());
	alert(WhosvBrowserApi.getUserName());
});
```