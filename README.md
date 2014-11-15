
## Whosv浏览器

### 接口定义

  - toString

  ```
  /**
	 * toString
	 * @return String
	 */
  ```
  - getVersionName

  ```
	/**
	 * 获取当前App的版本号
	 * @return String
	 */
	```
  - getUserId
 
  ```
  /**
   * 获取当前登录用户的Id
   * @return String
   * @example 5444811777686f6e46140000
   */
 ```
  - getUserName
 
  ```
  /**
	 * 获取当前登录用户的用户名
	 * @return String
	 * @example 小灰灰
	 */
	```
  - invoke

   ```
  /**
   * 召唤神兽
   * @param  String action
   * @param  String[] option1
   * @param  String[] option2
   * @return void
   */
  ```
  
### Invoke函数

> Android 调用Native相册组件

```Java
@JavascriptInterface
    public void invoke(String action,String[] imageUrls,String[] thumbnails) {
      if(action.equals("album")) {
        List<String> imageUrlList = new ArrayList<String>(imageUrls.length);
        List<String> thumbnailList = new ArrayList<String>(thumbnails.length);
        imageUrlList.addAll(Arrays.asList(imageUrls));
        thumbnailList.addAll(Arrays.asList(thumbnails));
        final ArrayList<String> imageUrlArrayList = (ArrayList<String>) imageUrlList;
        final ArrayList<String> thumbnailArrayList = (ArrayList<String>) thumbnailList;
        ((WhosvActivity)context).runOnUiThread(new Runnable() {
          @Override
          public void run() {
            Bundle bundle = new Bundle();
            bundle.putStringArrayList(ImagePageActivity.BUNDLE_IMAGE, imageUrlArrayList);
            bundle.putStringArrayList(ImagePageActivity.BUNDLE_THUMBNAIL_IMAGE, thumbnailArrayList);
            bundle.putInt(ImagePageActivity.BUNDLE_PAGE_CURRENT_POSITION, 0);
            ActivityUtils.jump(context, ImagePageActivity.class, WhosvActivity.REQUEST_CODE_IMAGE, bundle);
          }
        });
      }
    }
```

### 使用

> 新版v0.2.0修改了调用接口的方法,采用回调函数注册的方式

```javascript
WhosvBrowserApi.ready(function(api){
	var str = WhosvBrowserApi.toString();
	alert(str);
	alert(api.getUserId());
	alert(api.getUserName());
});
```

> Written with [StackEdit](https://stackedit.io/).