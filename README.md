### 1. 该项目数据来源于课程后端，请先运行课程后端项目与“https://localhost:3001”

### 2. 如果遇到corss domain的问题，请修改后端代码，启用cors中间件
  #### 在`Startup`类的`ConfigureServices`函数中添加代码`services.AddCors...`
  ```c#
  public void ConfigureServices(IServiceCollection services)
  {
    services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
    {
      builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    }));
  ...
  ```
  
   #### 在`Startup`类的`Configure`函数中添加代码`app.UseCors("MyPolicy");`
  ```c#
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors("MyPolicy");

      // �����ģ�
      app.UseRouting();
  ...
  ```

### 3. 运行环境：
  - node: v10.16.2
  - npm: 6.9.0

### 4. 运行前端项目：

  ```bash
  npm install
  ```
  ```bash
  npm start
  ```