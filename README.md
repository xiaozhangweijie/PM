# PM
react
登录
params:post('/auth/loginByMobile', parmas)
mobile:电话号码
password:密码

获取首页数据
params：HttpUtils.get('/topic/list', parmas)
page:当前页数
size:每页数据量

根据专题Id获取专题详情
params：id：主题id
HttpUtils.get('/topic/detail', parmas)

根据专题id获取相关专题
params：专题id
 HttpUtils.get('/topic/related', parmas)

根据专题id或者商品id获取评论获取相关专题
 parmas:
   *   valueId: 专题id、商品id
   *  typeId：1:专题id、0:商品id
   *  page:
   *  size:
   HttpUtils.get('/comment/list', parmas)

   获取分类id分类nav数据
   params：id当前分类id
   HttpUtils.get('/goods/category', parmas)

   根据分类id或者制造商id获取商品
     parmas:
   *   brandId: 制造商Id（非必填）
   *   categoryId: 分类Id（非必填）
   *   sort: id(默认排序)、price(价格排序)
   *   order: 排序方式
   *   page: 当前页数
   *   size: 每页数据量
    HttpUtils.get('/goods/list', parmas)

   分类页初始化信息获取
   HttpUtils.get('/catalog/index', parmas)

   根据分类id获取当前分类信息和子分类
   parmas：id分类id
   HttpUtils.get('/catalog/current', parmas)

   获取在售商品数量
   HttpUtils.get('/goods/count', parmas)

   根据制造商id获取制造商详情
   params：id制造商id
   HttpUtils.get('/brand/detail', parmas)

根据制造商ID获取制造商相关商品（同根据分类ID获取商品）
    parmas:
      id: 制造商Id
      page: 当前页数
      size: 每页数据量
      HttpUtils.get('/brand/detail', parmas)

对某个商品或专题进行评论
      params：
      content：内容
      typeId：类型
      valueId：id
      HttpUtils.post('/comment/post', parmas)

获取商品查询的相关信息
      params：{}
       HttpUtils.get('/search/index', parmas)

商品查询模糊查询关键字
       params：keyword：查询名称
       HttpUtils.get('/search/helper', parmas)

删除商品查询的历史记录
params：{}
get('/search/clearhistory', parmas)

获取商品详情
params：id商品id
get('/goods/detail', parmas)

相关商品
params：id商品id
get('/goods/related', parmas)

获取用户购物车商品数量
params:
get('/cart/goodscount', parmas)


是否添加到收藏栏
params：
typeId：0：是、1：否
valueId：商品id
post('/collect/addordelete', parmas)

查询收藏栏商品
params：
tyoeId：0：否、1是
HttpUtils.get('/collect/list', parmas)

添加到购物车
params：goodsId：商品Id
number：数量
productId：产品价格Id
 HttpUtils.post('/cart/add', parmas)

 获取用户购物车数据
 params:
 HttpUtils.get('/cart/index', parmas)

 购物车商品是否选中
 params：
 isChecked：是否选中1：是，0否
 produceIds:商品产品id
 HttpUtils.post('/cart/checked', parmas)

 删除购物车商品
 params：producetId：商品产品Id
 HttpUtils.post('/cart/delete', parmas)

 删除购物车商品
 params：productId：商品产品Id
 HttpUtils.post('/cart/update', parmas)

 获取用户地址栏数据
 HttpUtils.get('/address/list', parmas)

 新增地址
 params：id地址Id
 HttpUtils.post('/address/save', parmas)

 获取删除地址数据
 parmas：id地址iD
  HttpUtils.post('/address/delete', parmas)