
# 2.Angular模板语法、插值语法、事件绑定
    ## 1.插值语句
        介绍：
            插值语句就是讲从后台获取的数据在前端页面动态的展示出来。
        实现方式：
            Angular和Vue实现的方式相同，都是通过'{{...}}'来进行插值
        说明：
            花括号之间的文本通常是组件属性的名字。Angular 会把这个名字替换为响应组件属性的字符串值。
    ## 2.管道：
        介绍：
            Angular管道语法是针对字符串。货币。日期等一些特定的数据进行格式转换，管道可以认为是一个简单的函数，接收模板中的数据，然后通过自身的处理，返回特定格式数据，类似Vue的过滤器。
        Angular内置管道：
            DatePipe：根据本地环境中的规则格式化日期值。
            UpperCasePipe：把文本全部转换成大写。
            LowerCasePipe ：把文本全部转换成小写。
            CurrencyPipe ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。
            DecimalPipe：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。
            PercentPipe ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。
        使用方法：
            <p>日期转换 {{ birthday | date:"MM/dd/yy" }}</p>
        通过函数使用管道：
            html模板中：
                <p>The hero's birthday is {{ birthday | date:format }}</p>
                <button (click)="toggleFormat()">改变格式</button> 

            ts文件中：

            export class BirthdayComponent {
                birthday = new Date(1988, 3, 15);
                toggle = true; 
                get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
                toggleFormat() { this.toggle = !this.toggle; }
            }
        说明：
            点击'改变格式'按钮之后，会触发toggleFormat()函数，ts中的toggleFormat会改变返回模板的format值，展示出不同的日期格式，值两种shortDate和fullDate，之间切换

    ## 3.属性绑定：
        介绍：
            Angular 中的属性绑定可帮助你设置 HTML 元素或指令的属性值，可以动态绑定HTML标签内置的属性。使用属性绑定，你可以执行诸如切换按钮、以编程方式设置路径，以及在组件之间共享值之类的功能。
        绑定方法：
            要绑定到元素的属性，请将其括在方括号 [] 内，该括号会将属性标为目标属性。目标属性就是你要对其进行赋值的 DOM 属性。
        实现语法：
            html模板中:
                <img [src]="itemImageUrl">
                <button [disabled]="isUnchanged">Disabled Button</button>
            ts中：
                itemImageUrl = '../assets/phone.png';
                isUnchanged = true
        注意：
            特定的属性要进行大小写的区分比如：
                <tr><td [colSpan]="1 + 1">Three-Four</td></tr>
                <span [innerHTML]="evilTitle"></span>

    ## Attribute 绑定、类绑定和样式绑定
        1.Attribute 绑定
            介绍：
                Angular 中的 Attribute 绑定可帮助你直接设置 Attribute 值。使用 Attribute 绑定，你可以提升无障碍性、动态设置应用程序样式以及同时管理多个 CSS 类或样式。
            实现：
                html模板：
                    <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
                ts：
                    actionName可以动态设置
        2.类绑定
            介绍：
                分为单个类绑定和多个类绑定，可以动态的从元素的Attribute中修改css类名
            1.单个类：
                html模板中：
                    [class.sale]="onSale"
                    通过变量onSale来控制类sale是否添加或删除
            2.多个类：
                html模板中：
                    [class]="classExpression"
                    classExpression可以是多个类名，设置之后类名对应的样式按照顺序出现
                实现：
                    <div [calss]="my-class-1 my-class-2 my-class-3"></div>
                    或者
                    [class]={class1:true,class2:false}
                    或者
                    [class]=[class1,class2]

        3.样式绑定
            介绍
                样式绑定分为三种方式：
            1.绑定到单一样式：
                [style.width]="width"
            2.绑定到带单位的单一样式：
                [style.width.px]="width"
            3.绑定到多个样式：
                [style]="width: 100px; height: 100px"
                [style]={width: '100px', height: '100px'}
                [style]=['width', '100px']

            



    ## 事件绑定
        介绍：
            通过事件绑定，你可以侦听并响应用户操作，例如击键、鼠标移动、点击和触摸。
        实现：
            html模板：
                <button (click)="onSave()">Save</button>
            ts文件
                onSave(){
                    console.log('save)
                }

    ## 双向绑定
        介绍：
            双向绑定为应用中的组件提供了一种共享数据的方式。使用双向绑定绑定来侦听事件并在父组件和子组件之间同步更新值。
        实现：
            <app-sizer [(size)]="fontSizePx"></app-sizer>
        实现方式：
            html模板：
                <div>
                    <button (click)="dec()" title="smaller">-</button>
                    <button (click)="inc()" title="bigger">+</button>
                    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
                </div>
            ts模板
                export class SizerComponent {
                    @Input()  size: number | string;
                    @Output() sizeChange = new EventEmitter<number>();

                    dec() { this.resize(-1); }
                    inc() { this.resize(+1); }

                    resize(delta: number) {
                        this.size = Math.min(40, Math.max(8, +this.size + delta));
                        this.sizeChange.emit(this.size);
                    }
                }






# 3.常见的Angular指令
    1.属性指令
        NgClass：
                可以动态的给标签设置css类或者删除css类，
            语法：
                <div [ngClass]="isSpecial ? 'special' : ''"></div>
            对比：
                类似于Vue中的 :style={'类名':布尔值}
        NgStyle：
                可以根据组件的不同状态使用多个内联样式，可以通过函数的方式返回。
            语法：
                在html文件中使用ngStyle
                    <div [ngStyle]="currentStyles"> </div>
                在ts文件中定义：
                    setCurrentStyles() {
                        this.currentStyles = {
                            'font-style':  变量1 ? 'italic' : 'normal',
                            'font-weight': 变量2 ? 'bold'   : 'normal',
                            'font-size':   变量3 ? '24px'   : '12px'
                        };
                    }
                    可以根据不同的变量，进行判断，设置不同的内联样式
            注意:
                在初始化的时候调用setCurrentStyles函数，当依赖的变量发生变化的时候，也要重新调用setCurrentStyles函数
        NgModel：
            双向绑定语法和Vue的v-model效果相同，在Angular中主要是针对表单数据的双向绑定，在使用之前必须要在app.module.ts 中导入FormsModule 模块，并且要添加到NgModule的import中。
            语法：
                app.module.ts文件：
                    引入：
                        import { FormsModule } from '@angular/forms';
                    使用：
                        @NgModule({
                            imports: [
                                BrowserModule,
                                FormsModule // <--- import into the NgModule
                            ],
                        })
                在html页面中进行双向绑定：
                     <input [(ngModel)]="currentItem.name"/>   
                     <div>{{currentItem.name}}</div>
                
    2.结构型指令
        NgIf/Ngelse
            动态控制DOM元素的显示与隐藏，
            语法：
                <div *ngIf="isActive" ></div>
            类比：
                和Vue的v-if，v-else语法相同，都是可以控制DOM元素的动态的显示与隐藏
            注意：
                ngIf前面的*是一个用来简化复杂语法的“语法糖”，Angular会把ngIf编译成为一个<ng-template>元素，并且会用<ng-template>包裹宿主，根据变量的布尔值来显示对应的元素
            实现方式：
                <ng-template [ngIf]="hero">
                    <div class="name">{{hero.name}}</div>
                </ng-template>
        NgFor
            动态遍历模板渲染列表
            语法：
                <div *ngFor="let item of items;let key =index"></div>
            类比：
                和Vue中的Vue-for指令功能相同，会根据传入的列表，循环渲染Html模板
            注意：
                NgFor和NgIf原理相同，会把带有*的语法转换成为<ng-template>元素，然后根据传入的数组，循环遍历这个template模板。
                index是循环产生的key，如果你需要使用，要在循环中先声明
            实现方式：
                <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
                <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
                </ng-template>
            关于trackBy的说明：
                如果对象列表会随着后端服务器变化频繁改变，那么Angular只能重新根据新的对象列表渲染DOM，重复执行会影响效率，trackBy的目的就是为了提高这一过程的效率，可以在组件中添加trackBy方法，跟踪对象列表中的某一特定值，如果trackBy跟踪的值已经被渲染过那么Angular就不会再次重新渲染，相同的值。
            实现方式：
                在html模板中:
                    <div *ngFor="let item of items; trackBy: trackByItems">
                        ({{item.id}}) {{item.name}}
                    </div>
                在ts中跟踪id：
                    trackByItems(index: number, item: Item): number { return item.id; }
        NgSwitch
            根据不同的条件显示不同的HTML元素，将选定的元素放入DOM渲染
                语法：
                    <div [ngSwitch]="currentItem.feature">
                        <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
                        <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
                        </div>
                说明：
                    与常见的switch case语法相同，根据不同的变量展示不同
# 4. 组件的创建、组件声明周期钩子函数
    组件
        1.组件介绍
            组件是Angular应用里面必不可少的一部分，Angular应用是通过各种组件建立起来。
        2.组件的创建
            前提：
                在创建组件之前必须要先安装Angular Cli ，并使用Cli创建一个应用
            说明：
                在以组件命名的文件夹下必定包含以下文件
                    一个组件文件 <component-name>.component.ts
                    一个模板文件 <component-name>.component.html
                    一个 CSS 文件， <component-name>.component.css
                    测试文件 <component-name>.component.spec.ts
            1.Angular脚手架创建组件：
                使用 Angular CLI 创建一个组件：
                1.在终端窗口中，导航到要放置你应用的目录。
                2.运行 ng generate component <component-name> 命令，其中 <component-name> 是新组件的名字。
            2.手动创建组件
                1.导航到你的 Angular 项目目录。
                2.创建一个新文件 helloword.component.ts 。
                3.在文件的顶部，添加下面的 import 语句。
                    import { Component } from '@angular/core';
                4.在 import 语句之后，添加一个 @Component 装饰器
                    @Component({
                    })
                5.为组件选择一个 CSS 选择器。
                    @Component({
                        selector: 'app-component-overview',
                    })
                6.定义组件用以显示信息的 HTML 模板。在大多数情况下，这个模板是一个单独的 HTML 文件。
                    @Component({
                        selector: 'app-component-overview',
                        templateUrl: './component-overview.component.html',
                    })
                7.为组件的模板选择样式。在大多数情况下，你可以在单独的文件中定义组件模板的样式。
                @Component({
                        selector: 'app-component-overview',
                        templateUrl: './component-overview.component.html',
                        styleUrls: ['./component-overview.component.css']
                    })
                8.添加一个包含该组件代码 class 语句。
                export class ComponentOverviewComponent {
                    
                }
        3.指定组件的css选择器
            介绍：
                每个组件都需要一个 CSS 选择器。选择器会告诉 Angular：当在模板 HTML 中找到相应的标签时，就把该组件实例化在那里
            实现：
                @Component({
                selector: 'app-component-overview',
                })
        4.定义组件的模板
            介绍：
                模板是一段 HTML，它告诉 Angular 如何在应用中渲染组件。你可以通过以下两种方式之一为组件定义模板：引用外部文件，或直接写在组件内部。
            实现：
                @Component({
                selector: 'app-component-overview',
                templateUrl: './component-overview.component.html',
                })
            注意：
                要在组件中定义模板，就要把一个 template 属性添加到 @Component 中，该属性的内容是要使用的 HTML。
        5.声明组件的样式
            介绍：
                引用一个外部文件，或直接写在组件内部。
                要在单独的文件中声明组件的样式，就要把 stylesUrls 属性添加到 @Component 装饰器中
            实现：
                @Component({
                selector: 'app-component-overview',
                templateUrl: './component-overview.component.html',
                styleUrls: ['./component-overview.component.css']
                })
    生命周期：
        ngOnChanges()
            介绍：
                当 Angular 设置或重新设置数据绑定的输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象。注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。
            使用：
                在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。
                注意，如果你的组件没有输入，或者你使用它时没有提供任何输入，那么框架就不会调用 ngOnChanges()。
        ngOnInit()
            介绍：
                在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
            使用：
                在第一轮 ngOnChanges() 完成之后调用，只调用一次。

        ngDoCheck()
            介绍：
                检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。
            使用：
                紧跟在每次执行变更检测时的 ngOnChanges() 和 首次执行变更检测时的 ngOnInit() 后调用。
        ngAfterContentInit()
            介绍：
                当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。
            使用：
                第一次 ngDoCheck() 之后调用，只调用一次。
        ngAfterContentChecked()
            每当 Angular 检查完被投影到组件或指令中的内容之后调用。
        ngOnDestroy()
            介绍：
                每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。 欲知详情，参阅本文档中的在实例销毁时进行清理。
            使用：    
                在 Angular 销毁指令或组件之前立即调用。

# 5.组件之间相互通信
    1.父传子:
        父传子四步走
            第一步：
                父组件ts文件中定义要传递到子组件的数据
                public msg:String ="我是父组件传值"
            第二步：
                在父组件html中的子组件标签中定义自定义属性来绑定父组件定义的信息
                <app-child [info] = "msg"></app-child>
            第三步：
                在子组件中引入Angular的@Input装饰器模块接收父组件的传值（子组件的ts文件中）
                import {Input} from '@angular/core';
                接收：
                    @Input() info:String
            第四步：
                展示,子组件的html文件中直接可以展示
                <h1>{{info}}</h1>
    2.子传父
        方法一：@Output装饰器结合事件监听（6步走）
                1.在子组件中导入Output 和 EventEmitter
                    import {Output, EventEmitter } from '@angular/core';
                2.并且通过@Output实例化要传递向父组件的消息
                    @Output() private sendMsg = new EventEmitter();
                    public toFather = '我是子组件传递给父组件的数据';
                3.给子组件添加点击事件，点击的时候将数据传递给父组件
                    handlerClick() {
                        this.outer.emit(this.toFather)
                    }
                    <button (click)="handlerClick()">开始传值</button>
                5.在父组件html中绑定自定义事件
                    <app-child (sendMsg) = "handlerChild($event)"></app-child>
                6.在父组件的ts中就可以获取数据
                    handlerChild（e）{
                        alert（e）
                    }
        方法二：@ViewChild装饰器（5步走）
                1.假如子组件中有一个数据对象：
                    Childinfo：{name：‘123’}   
                2.在父组件html里的子组件标签上定义一个名字（#名字），相当于这个子组件的id名
                    <app-son #son ></app-son> 　
                    <button (click)="getData">获取子组件的值</button> 
                    <h1>{{mydata}}</h1>　
                3.在父组件的ts中引入ViewChild
                    import { Component, ViewChild } from '@angular/core';
                4.使用
                    @ViewChild('son') son; 括号里面的名称要与子组件标签#后面的名称一致。
                5.最后就可以调用子组件的数据和方法，如果子组件中有一个数据为viewChildinfo，就可以这样去调用
                    getData() {
                        console.log(this.son)
                        this.mydata = this.son.Childinfo;
                    }

# 6.路由导航
    编程式路由：this.router.navigate(['/hello'])
    路由传参：
        this.router.navigate(['/hello'], { queryParams: { name: 'Tylili' } })


# 7.异步获取数据

# 8.Vue项目使用FormData导入文件解析以及实例
1.使用input输入框选择本地文件
     <input
        @change="addFile"
        name="file"
        ref="file"
        multiple="multiple"
        prefix-icon="el-icon-upload2"
        type="file"
        class="uploadClass"
    />
    <button @click="uploadTitle()">上传文件</button>
2.在data中创建一个formDate对象
    data(){
        return{
            formData:new FormData()
        }
    }
3.将获取的文件添加到formData中
    addFile(event) {
      // 通过DOM取文件数据
      let inputDOM = this.$refs.file;
      this.fil = inputDOM.files;
      this.formData.append("file", this.fil[0]);
    },
4.将文件传给后台（调用后端接口）
    uploadTitle() { 
      if (!this.fil) {
        this.$message.warning("请选择文件");
      } else {
          return new Promise((resolve) => {
                let config = {
                    //添加请求头
                    headers: { "Content-Type": "multipart/form-data" },
                };
                axios.post('后端接口', this.formData, config).then(res => {
                    if (res) {
                        resolve(res)
                    }
                })
            })
        }
    }


# javaScript 快速将new Date()转换成为时间戳的方法，大大提高你的工作效率
    前言：在日常的前端开发中我么前端的主要工作是展示数据，体现在用户层面，但是后端在计算的时候，往往是不考虑用户层面的东西，更多的是从效率方面考虑。所以很多的时候我们在给后端传参的时候，需要对参数进行处理。比如我们在传递日期的时候，后端一般都需要的是时间戳，但是我们前端不可能给用户直接展示时间戳，这个过程就牵扯到时间戳类型的转换，这篇文章主要给大家介绍几种快捷的时间戳转换方式；
    在js中可以通过new Date()创建时间对象，而获取当前时间戳的方法有以下四种方式：

    1.通过getTime()方法获取：
    原理：getTime()时Date（）时间对象默认的方法，会返回从 1970 年 1 月 1 日至今的毫秒数，也就是我们所需要的时间戳
    var times = (new Date()).getTime();
    console.log(times);

    2.使用+new Date()获取：
    原理：主要是利用javaScript的默认类型转换，js的类型转换会默认将日期格式的转换成为数字，也就是我们所需要的Number类型的时间戳
    var times = +new Date();
    或者
    var times = Number(new Date());
    console.log(times);

    3.使用valueOf()方法获取：
    原理：valueOf() 方法用于返回给定参数的原生 Number 对象值，也会将直接将日期格式返回成为Number类型的
    var times = (new Date()).valueOf();
    console.log(times);

    4.使用new Date() * 1获取：
    原理：与+相同主要是利用javaScript的默认类型转换，js的类型转换会默认将日期格式的转换成为数字，也就是我们所需要的Number类型的时间戳
    var times = (new Date()) * 1;
    console.log(times);

    总结：这四种获取时间的戳的方式比较快捷方便，并且都是利用了Date（）对象或者Number（）对象的属性，进行了转换，效率层面上也比自己通过一些字串串截取，然后在进行运行高。强烈推荐大家尝试，这些小技巧。


# javaScript ES6数组去重，排序，多维数组扁平化
    前言:随着ES6语法的普及，js代码越写越精炼当然这样也会提高我们的开发效率，这片文章主要给大家介绍一些日常开发中使用ES6数组方法的小技巧，提高大家的开发效率。
    一、数组去重几种方法
        特点：不会改变原数组，会产生一个新数组
        1. ...new Set()
                Set是es6提供的新数据结构，类似于数组，但是Set中的值都是唯一的，没有重复的元素出现
        2. Array.from(new Set())
    二、数组排序
        1.sort()
    三、多维数组转换成为一维数组
        function ArrayFun(arr) {  
            const flattened = [].concat(...arr);  
            return flattened.some(item => Array.isArray(item)) ? ArrayFun(flattened) : flattened;
        }
        const array = [1, [2, '测试'], 3, [['哈哈1', '1'], 2, 3]]
        const flatArr = ArrayFun(array)
        console.log(flatArr)
    四、去除数组中的'脏数据'、或者称为'假数据' 比如：0、undefined、null、NaN、''、false 等等 
        const array = [0, 1, '0', '1', '大漠', 'w3cplus.com', undefined, true, false, null, 'undefined', 'null', NaN, 'NaN', '1' + 0]
        const brray = array.map(item => {
             return item
        }).filter(Boolean)
        // 很多人可能不明白filter(Boolean)这种写法，也可以这样写
        const brray = array.filter(item => {
             return Boolean(item)
         })
        console.log(brray)  

    五、获取对象数组的value、或者key值
    比如 ： 你有一个这样的数组。你现在需要拿到数组对象里面的value值,之前我都是使用map方法，但是Array.from（）实在是太香了，我果断抛弃了前者
        const array = [
            {
                key: '城市1',
                value: '北京'
            },
            {
                key: '城市2',
                value: '天津'
            }
        ]
        const name = Array.from(array, ({ value }) => value)
        console.log(name)
        [ '北京', '天津' ]
        const key = Array.from(array, ({ key }) => key)
        console.log(key);
        [ '城市1', '城市2' ]

    六、获取数组元素中的最大值、最小值
        const numbers = [1, 2, 3, 4];
        Math.max(...numbers) 
        Math.min(...numbers) 
    七、数组截取
        slice()比splice()方法运行更快，性能更好
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        array = array.slice(0, 4);
        console.log(array); 

# uniapp混合开发 HBuildX 打不开微信开发者工具
    最近组员小李在做小程序开发的时候遇到一个比较奇怪的问题就是在HBuilderX,上点击运行到小程序模拟器时，不能打开微信开发工具，最后费了九牛二虎之力给解决了，他又能愉快地敲代码了。
    首先进入微信开发者工具配置代理和安全服务：

    配置完成之后一般来说，是可以通过HBuilderX打开的可是小李还是不行。

    最后我发现新来的小李竟然没有我们的小程序的开发权限，于是我在公众平台是给他配置权限。


    最后故障愉快地解除了


# 手把手教你使用uniapp开发微信小程序，从项目搭建到线上发布全流程,体验混合开发的乐趣
    前言：
        这篇文章主要针对刚开始接触混合开发的小伙伴，全文使用uniapp框架，使用HBuilderX结合微信小程序开发工具作为开发环境。
    uniapp介绍：
        uniapp做混合开发的好处：
            1.不用关心适应问题，css布局使用rpx作为单位，完美避开不同分辨率适应问题。
            2.多端融合，不仅可以发布到H5，还可以发布到各大平台的小程序，也支持安卓和ios原生APP
            3.使用Vue.js语法开发，相对其他混合开发框架上手比较容易
    开发环境&IDE工具
        uniapp使用HBuilderX作为开发工具，
        下载地址：https://www.dcloud.io/hbuilderx.html
    第一步：
    打开HBuilderX选择文件->新建项目->选择uniapp项目如图：

    第二步：
    配置manifest.json文件，配置微信小程序AppID 如图：

    获取微信小程序AppID如图：


    第三步：
    小程序开发工具配置服务代理，端口

    第四步：
    点击运行->运行到小程序模拟器

    第五步：
    点击发布->选择小程序发布

    第六步：
    小程序开发工具中填写对应的信息->上传->公众平台上提交审核

    

# 处理uniapp开发安卓app进入打开手机的游戏加速模式
    最近使用uniapp开发了一款社区生活类的app，但是在测试的过程中，测试的妹子发现，打开我这款app后她的小米手机总是会进入游戏加速模式，关键是进入游戏模式的时候回出现一个弹出框提示，很影响用户体验。
     
    原因:可能是uniapp默认的manifest配置文件中的App对应的配置有关,最后修改了默认的配置文件，

    解决方法：
    在manifest.json文件中关闭硬件加速模块
    hardwareAccelerated="false"




# ES6 对象新增方法使用
    前言：
        大家好我是前端新手小猿同学，这篇文章主要给大家简答介绍一下ES6关于对象新增的Object.is()和Object.assign()方法的使用以及原理的简单分析，希望对大家的学习进步有所帮助，当然文章中可能存在理解不正确的地方希望大家可在评论去相互讨教，共同进步。

    一、Object.is()
            ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
            ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

            相等运算和严格等运算的缺点分析：
                // 自动转换数据类型
                // console.log(1==true)
                // 自动将左侧1的数据类型进行转换
                // NaN不等于自身
                // console.log(NaN===NaN)
                // console.log(Object.is(NaN,NaN))
                // console.log(Object.is(+0, -0))
    二、Object.assign()
            Object.assign()方法用于对象的合并，将源对象的所有可枚举属性，复制到目标对象,简单来说就是可以将两个对象中不同的属性进行合并，比如
                const obj1 = {a:1}
                const obj2 = {b:2}
                const obj3 = {}
                Object.assign(obj3,obj1,obj2)
                console.log(obj3);
            但是如果目标对象中有和源对象同名的属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性:
                const obj = { a: 1, b: 1 };
                const obj1 = { b: 2, c: 2 };
                const obj2 = { c: 3 };
                Object.assign(obj, obj1, obj2);
                console.log(obj);
            如果源对象中只有一个参数那么assign()会直接返回这个参数，如果遇到这个参数不是对象，assign()会先将这个参数转换成为对象，然后返回。
            注意：由于undefined和null无法转成对象，所以如果它们作为目标对象参数，就会报错。所以我们在选择目标对象的时候要尽量避开undefined和null。
                const obj1 = {a:1}
                // 报错
                // const obj2 = Object.assign(undefined,obj1)
                // console.log(obj2);
                // 不报错
                const obj3 = Object.assign(obj1,null)
                console.log(obj3);
                 // 不报错
                const obj3 = Object.assign(obj1,undefined)
                console.log(obj3);
                // 原因：
                // Object.assign()
                // 默认第一个参数，是做为目标对象，会将后面的参数和并到第一个目标对象中，
                // 所以第一个参数的类型必须是Object类型，如果不是Object类型assgin()可以自动转换，
                // 但是null和undefind无法转换成为Object类型所以会报错,但是当null和undefind做第二个参数的时候，如果类型转换失败就会跳过，
                    只是不和目标对象合并，所以不会报错
                
# Vue axios清除当前页面的所有未响应接口、批量清除接口
场景：
    后端小李今天突然找我说后端服务挂了，我心想和我有啥关系，但是当他打开日志之后，我懵逼了，全是我前端调用后端接口的请求报错导致错误日志堆积磁盘爆满（话说内存不能给分大一点吗），说归说还是我写的bug还要我处理。
    
原因分析：
    定时获取数据的定时器在token失效之后没有清除，这个bug改完之后，我立马又想到一个问题由于大数据监控平台数据量比较大后端接口响应时间较长，虽然我清了定时器但是那些还未响应请求接口咋办，于是我想到了axios的CancelToken()，取消当前的所有请求
1.在全局封装axios的时候增加一个存储当前所有请求的数组

// 当前异步请求的合集
const _axiosPromiseArr = []

2.axios请求拦截器的config中增加cancelToken
Axios.interceptors.request.use(config=>{
    config.cancelToken = new axios.CancelToken(cancel => {
      _axiosPromiseArr.push({cancel})
    })
    return config;
    },
        err => {
        return Promise.reject(err);
  }
)

3.当服务器报500的时候清除当前所有的请求，响应拦截器中增加
Axios.interceptors.response.use(
   response=>{
        if (response.data.code === 500) {
        // 清除当前所有的未得到结果的异步请求
        _axiosPromiseArr.forEach((element, index) => {
          element.cancel()
          delete _axiosPromiseArr[index]
        });
        localStorage.clear();
        //操作失败 弹窗
      Message({
        showClose: true,
        message: response.data.msg,
        type: 'error'
      });
      return false;
      }
   } 
)

4.或者是当离开这一个页面、进入下一个页面的时候取消,这是后建议你将存放当前异步请求合集的数组挂在到window对象上这样就可以全局使用了
在封装axios的时候将_axiosPromiseArr数组挂载到window对象上

window._axiosPromiseArr = []


路由守卫中增加当你离开这个页面的时候清除所有的请求
router.beforeEach((to, from, next)=>{
    window._axiosPromiseArr.forEach((element, index) => {
          element.cancel()
          delete window._axiosPromiseArr[index]
    });
})

# 数组常用方法
3.unshift（）
作用：
向数组中的头部增加一个或者多个元素，返回新的数组长度
特点：
会改变原数组的内容
实现：
var arr = ["1", "2", "3", "4"];
arr.unshift("5","6");
console.log(arr.unshift("5","6"))
输出：
6
console.log(arr)
输出：
["5","6","1", "2", "3", "4"]
4.shift（）
作用：
删除数组头部的第一个元素，并返回第一个元素的值
特点：
会改变原数组的内容
实现：
var arr = ["1", "2", "3", "4"];
arr.shift();
console.log(arr.shift())
输出：
2
console.log(arr)
输出：
["2", "3", "4"]
5.splice（）
作用：
删除数组中的指定元素
特点：
会改变原数组的内容
实现：
var arr = ["1", "2", "3", "4"];
从下标为2的元素开始删除，删除一个元素,返回删除元素的数据
arr.splice(2，1);
console.log(arr.splice())
输出：
["3"]

6.slice（）
作用：
从数组中获取到选定的元素，传入两个参数start和end分别对应数组的起始下标和结束下标，返回一个由选定元素组成的数组
特点：
不会改变原数组,只会返回一个浅复制了原数组中的元素的一个新数组
实现：
var arr = ["1", "2", "3", "4"];
arr.slice(1,3)
console.log(arr.slice(1,3))
输出：
["2", "3", "4"]
7.concat（）
作用：
方法用于连接两个或多个数组
特点：
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
实现：
var arr = ["1", "2", "3", "4"];
var brr = ["阿虎","李四"]
var arr1 = ["a","b"];
console.log(arr1.concat(arr,brr))
输出：
["a","b","1", "2", "3", "4","阿虎","李四"]

8.reverse（）
作用：
用于颠倒数组中元素的顺序。
特点：
会改变原数组
实现：
var arr = ["1", "2", "3", "4"];
console.log(arr1.reverse())
输出：
["4", "3", "2", "1"]
9.sort（）
作用：
sort() 方法用于对数组的元素进行排序。排序顺序可以是字母或数字，并按升序或降序。
默认排序顺序为按字母升序。
特点：
会改变原数组
实现：
使用数字排序，你必须通过一个函数作为参数来调用。
函数指定数字是按照升序还是降序排列。如果不适用函数调用那么34将会排在40前面，因为sort()的默认排序是按照unicode码顺序排列。
var arr = ["10", "6789", "9", "4"];
arr.sort();
console.log(arr.sort(function(a,b){return a-b}))
输出：
["4", "9", "10", "6789"]
10.join（）
作用：
join() 方法用于把数组中的所有元素按照指定的分隔符号转换一个字符串。
实现：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
如果不传入指定分隔符号，默认使用，号隔开
var energy = fruits.join();
console.log(energy);
输出：
Banana,Orange,Apple,Mango

# 字符串常用方法
    1.length
    作用：
    length 属性返回字符串的长度(字符数)
    实现：
    var txt = "Hello World!"
    console.log(txt.length)
    输出：
    12
    2.CharAt（）
    作用：
    charAt() 方法可返回指定位置的字符，第一个字符位置为 0, 第二个字符位置为 1,以此类推。
    实现：
    var str = "HELLO WORLD";
    var n = str.charAt(2)
    输出：
    L
    3.CharCodeAt（）
    作用：
    charCodeAt() 方法可返回指定位置的字符的 Unicode 编码，字符串中第一个字符的位置为 0， 第二个字符位置为 1，以此类推。
    实现：
    var str = "HELLO WORLD";
    var n = str.charCodeAt(0);
    输出：
    72
    4.fromCharCode（）
    作用：
    fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
    实现：
    var n = String.fromCharCode(65);
    输出：
    A

    5.indexOf（）
    作用：
    indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。
    实现：
    var str="Hello world, welcome to the universe.";
    var n=str.indexOf("welcome");
    输出：
    13

    6.lastIndexOf（）
    作用：
    lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索。
    实现：
    var str="I am from China,I love China";
    var n=str.lastIndexOf("China");
    输出：
    23
    7.replace()
    作用：
    用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    实现：
    var str="Visit C! Visit C!";
    var n=str.replace("C","R");
    输出：
    Visit R!Visit C!
    注意：
    之后替换匹配到的第一个字符串，并不会全部匹配，全部替换要使用正则表达式实现例如：
    var str="Mr Blue has a blue house and a blue car";
    var n=str.replace(/blue/g,"red");
    输出
    Mr Blue has a red house and a red car
    8.字符串截取的几种方法
    9.split（）
    作用：
    split() 方法用于把一个字符串分割成字符串数组。可以根据字符串中的某一个符号进行分割，
    注意：
    split() 方法不改变原始字符串。
    实现：
    var str="How are you doing today?";
    var n=str.split(" ");
    输出：
    [ 'How', 'are', 'you', 'doing', 'today?' ]
    var str = "abTcgThgT12T32"
    var n=str.split("T");
    输出：
    [ 'ab', 'cg', 'hg', '12', '32' ]
    10.toLowerCase（）&toUpperCase（）
    作用：
    toLowerCase() 方法用于把字符串转换为小写。
    toUpperCase() 方法用于把字符串转换为大写。


# 深拷贝和浅拷贝
为什么会出现深拷贝和浅拷贝？
    是由于 JS 对基本类型和引用类型的处理不同。基本类型指的是简单的数据段，而引用类型指的是一个对象保存在堆内存中的地址，JS 不允许我们直接操作内存中的地址，也就是说不能操作对象的内存空间，所以，我们对对象的操作都只是在操作它的引用而已。
    在复制时也是一样，如果我们复制一个基本类型的值时，会创建一个新值，并把它保存在新的变量的位置上。而如果我们复制一个引用类型时，同样会把变量中的值复制一份放到新的变量空间里，但此时复制的东西并不是对象本身，而是指向该对象的指针。所以我们复制引用类型后，两个变量其实指向同一个对象，所以改变其中的一个对象，会影响到另外一个。就会出现像小李这样的bug，你虽然没有提交数据，但是修改弹出框的数据是从表格中


#
https://blog.csdn.net/weixin_43742274/article/details/111669496  2  Angular基础知识系列学习（二）--Angular模板语法、插值语法、事件绑定
https://blog.csdn.net/weixin_43742274/article/details/111665076  3  Angular基础知识系列学习（三）--Angular内置基本指令介绍
https://blog.csdn.net/weixin_43742274/article/details/111675317  4  Angular基础知识系列学习（四）--组件的创建、组件声明周期钩子函数
https://blog.csdn.net/weixin_43742274/article/details/111689876  5  Angular基础知识系列学习（五）--父子组件传值，父传子，子传父，组件之间的通信
