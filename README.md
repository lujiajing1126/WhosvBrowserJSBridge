## Whosv浏览器

### 接口定义

  - toString
  - getVersionName
  - getUserId
  - getUserName
  - invoke
  - getUserInfo

### Install

```
npm install
// generate uglified version
make build
// generate js docs
make docs
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

### getUserInfo

> Android 调用本地用户数据

```Java
@JavascriptInterface
public String getUserInfo(String accessToken,String userId) {
  if(DataCacheProxy.getInstance().getAccessToken().equals(accessToken)) {
    User user = User.get(User.class,userId);
    if(user==null) {
      return null;
    } else {
      User friend = DataCacheProxy.getInstance().getUserByUserMap(userId);
      if(friend == null) {
        user.is_friend = false;
      } else {
        user.is_friend = true;
      }
      return GsonUtils.getInstance().getGson().toJson(user);
    }
  } else {
    return null;
  }
}
```

### 使用

> 新版v0.2.0修改了调用接口的方法,采用回调函数注册的方式

```javascript
WhosvBrowserApi.ready(function(api){
	alert(api.getUserId());
	alert(api.getUserName());
});
```

> Written with [StackEdit](https://stackedit.io/).
