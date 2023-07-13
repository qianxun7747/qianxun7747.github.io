function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临千寻的小破站😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是店长千寻😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以通过主页的邮箱或QQ联系我😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于千寻小破站的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。千寻的小破站是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "起这个名字是因为我记得很清楚的一款游戏，我用上了千寻只为求一梦🍰，到了后面就改成了千寻🍰，至于域名为什么是7747而不只是qianxun🍩，那我干脆就说到底了。因为我在GTAV游玩中把用户名起成了qianxun。之后就发现了一个很纠结的问题，被占用了，我想不到其他的名字。当然了，无伤大雅。才怪咯！超难受的好么！偏偏我那么喜欢qianxun，我是不会把它删掉的,就用成了qianxun747然后有了个小号就改为7747了"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "分类没有什么好的"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "想看哪个看哪个，然后我还给他改成了个性分类然后又改回来了🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "不要看即刻，感觉有点丢银。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "我个人最推荐的是去看看文章，里面有教程，也可以去友链看看👻"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么叫千寻的小破站呢他不破啊？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "诶？千寻即是我的网名，小破站是因为我这网站刚开始是比较简陋吧"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "那名字为什么叫千寻而不叫千寻只为求一梦呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "这个是因为我的第一款游戏的名字就是这个千寻只为求一梦，感觉有点不咋好就改成千寻了 "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感来自于热爱和去大佬博客抄"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }