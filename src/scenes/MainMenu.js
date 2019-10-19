class MainMenu extends Phaser.Scene {

    constructor() {
        super("MainMenu");
    }

    preload(){

       this.load.image("background_menu", './src/assets/menu/menu_background.png');
       this.load.image("earth", './src/assets/menu/menu_earth.png');
       this.load.image("debright_logo", './src/assets/menu/debright_logo.png');
       this.load.spritesheet("sparkle", './src/assets/menu/sparkle.png', {frameWidth: 32, frameHeigth: 32});
       this.load.image("sa_logo", './src/assets/menu/ig-space-apps.png');
       this.load.image("start_button", './src/assets/menu/start.png')
       this.load.image("settings_button", './src/assets/menu/settings.png')
       this.load.image("credits_button", './src/assets/menu/credits.png')
       this.load.image("quit_button", './src/assets/menu/quit.png')
        //earth animation
        this.load.image('earth1', './src/assets/menu/earth/0001.png');
        this.load.image('earth2', './src/assets/menu/earth/0002.png');
        this.load.image('earth3', './src/assets/menu/earth/0003.png');
        this.load.image('earth4', './src/assets/menu/earth/0004.png');
        this.load.image('earth5', './src/assets/menu/earth/0005.png');
        this.load.image('earth6', './src/assets/menu/earth/0006.png');
        this.load.image('earth7', './src/assets/menu/earth/0007.png');
        this.load.image('earth8', './src/assets/menu/earth/0008.png');
        this.load.image('earth9', './src/assets/menu/earth/0009.png');
        this.load.image('earth10', './src/assets/menu/earth/0010.png');
        this.load.image('earth11', './src/assets/menu/earth/0011.png');
        this.load.image('earth12', './src/assets/menu/earth/0012.png');
        this.load.image('earth13', './src/assets/menu/earth/0013.png');
        this.load.image('earth14', './src/assets/menu/earth/0014.png');
        this.load.image('earth15', './src/assets/menu/earth/0015.png');
        this.load.image('earth16', './src/assets/menu/earth/0016.png');
        this.load.image('earth17', './src/assets/menu/earth/0017.png');
        this.load.image('earth18', './src/assets/menu/earth/0018.png');
        this.load.image('earth19', './src/assets/menu/earth/0019.png');
        this.load.image('earth20', './src/assets/menu/earth/0020.png');
        this.load.image('earth21', './src/assets/menu/earth/0021.png');
        this.load.image('earth22', './src/assets/menu/earth/0022.png');
        this.load.image('earth23', './src/assets/menu/earth/0023.png');
        this.load.image('earth24', './src/assets/menu/earth/0024.png');

        this.load.image('earth25', './src/assets/menu/earth/0025.png');
        this.load.image('earth26', './src/assets/menu/earth/0026.png');
        this.load.image('earth27', './src/assets/menu/earth/0027.png');
        this.load.image('earth28', './src/assets/menu/earth/0028.png');
        this.load.image('earth29', './src/assets/menu/earth/0029.png');
        this.load.image('earth30', './src/assets/menu/earth/0030.png');
        this.load.image('earth31', './src/assets/menu/earth/0031.png');
        this.load.image('earth32', './src/assets/menu/earth/0032.png');
        this.load.image('earth33', './src/assets/menu/earth/0033.png');
        this.load.image('earth34', './src/assets/menu/earth/0034.png');
        this.load.image('earth35', './src/assets/menu/earth/0035.png');
        this.load.image('earth36', './src/assets/menu/earth/0036.png');
        this.load.image('earth37', './src/assets/menu/earth/0037.png');
        this.load.image('earth38', './src/assets/menu/earth/0038.png');
        this.load.image('earth39', './src/assets/menu/earth/0039.png');
        this.load.image('earth40', './src/assets/menu/earth/0040.png');
        this.load.image('earth41', './src/assets/menu/earth/0041.png');
        this.load.image('earth42', './src/assets/menu/earth/0042.png');
        this.load.image('earth43', './src/assets/menu/earth/0043.png');
        this.load.image('earth44', './src/assets/menu/earth/0044.png');
        this.load.image('earth45', './src/assets/menu/earth/0045.png');
        this.load.image('earth46', './src/assets/menu/earth/0046.png');
        this.load.image('earth47', './src/assets/menu/earth/0047.png');
        this.load.image('earth48', './src/assets/menu/earth/0048.png');

        this.load.image('earth49', './src/assets/menu/earth/0049.png');
        this.load.image('earth50', './src/assets/menu/earth/0050.png');
        this.load.image('earth51', './src/assets/menu/earth/0051.png');
        this.load.image('earth52', './src/assets/menu/earth/0052.png');
        this.load.image('earth53', './src/assets/menu/earth/0053.png');
        this.load.image('earth54', './src/assets/menu/earth/0054.png');
        this.load.image('earth55', './src/assets/menu/earth/0055.png');
        this.load.image('earth56', './src/assets/menu/earth/0056.png');
        this.load.image('earth57', './src/assets/menu/earth/0057.png');
        this.load.image('earth58', './src/assets/menu/earth/0058.png');
        this.load.image('earth59', './src/assets/menu/earth/0059.png');
        this.load.image('earth60', './src/assets/menu/earth/0060.png');
        this.load.image('earth61', './src/assets/menu/earth/0061.png');
        this.load.image('earth62', './src/assets/menu/earth/0062.png');
        this.load.image('earth63', './src/assets/menu/earth/0063.png');
        this.load.image('earth64', './src/assets/menu/earth/0064.png');
        this.load.image('earth65', './src/assets/menu/earth/0065.png');
        this.load.image('earth66', './src/assets/menu/earth/0066.png');
        this.load.image('earth67', './src/assets/menu/earth/0067.png');
        this.load.image('earth68', './src/assets/menu/earth/0068.png');
        this.load.image('earth69', './src/assets/menu/earth/0069.png');
        this.load.image('earth70', './src/assets/menu/earth/0070.png');
        this.load.image('earth71', './src/assets/menu/earth/0071.png');
        this.load.image('earth72', './src/assets/menu/earth/0072.png');

        this.load.image('earth73', './src/assets/menu/earth/0073.png');
        this.load.image('earth74', './src/assets/menu/earth/0074.png');
        this.load.image('earth75', './src/assets/menu/earth/0075.png');
        this.load.image('earth76', './src/assets/menu/earth/0076.png');
        this.load.image('earth77', './src/assets/menu/earth/0077.png');
        this.load.image('earth78', './src/assets/menu/earth/0078.png');
        this.load.image('earth79', './src/assets/menu/earth/0079.png');
        this.load.image('earth80', './src/assets/menu/earth/0080.png');
        this.load.image('earth81', './src/assets/menu/earth/0081.png');
        this.load.image('earth82', './src/assets/menu/earth/0082.png');
        this.load.image('earth83', './src/assets/menu/earth/0083.png');
        this.load.image('earth84', './src/assets/menu/earth/0084.png');
        this.load.image('earth85', './src/assets/menu/earth/0085.png');
        this.load.image('earth86', './src/assets/menu/earth/0086.png');
        this.load.image('earth87', './src/assets/menu/earth/0087.png');
        this.load.image('earth88', './src/assets/menu/earth/0088.png');
        this.load.image('earth89', './src/assets/menu/earth/0089.png');
        this.load.image('earth90', './src/assets/menu/earth/0090.png');
        this.load.image('earth91', './src/assets/menu/earth/0091.png');
        this.load.image('earth92', './src/assets/menu/earth/0092.png');
        this.load.image('earth93', './src/assets/menu/earth/0093.png');
        this.load.image('earth94', './src/assets/menu/earth/0094.png');
        this.load.image('earth95', './src/assets/menu/earth/0095.png');
        this.load.image('earth96', './src/assets/menu/earth/0096.png');
        
        this.load.image('earth97', './src/assets/menu/earth/0097.png');
        this.load.image('earth98', './src/assets/menu/earth/0098.png');
        this.load.image('earth99', './src/assets/menu/earth/0099.png');
        this.load.image('earth100', './src/assets/menu/earth/0100.png');
        this.load.image('earth101', './src/assets/menu/earth/0101.png');
        this.load.image('earth102', './src/assets/menu/earth/0102.png');
        this.load.image('earth103', './src/assets/menu/earth/0103.png');
        this.load.image('earth104', './src/assets/menu/earth/0104.png');
        this.load.image('earth105', './src/assets/menu/earth/0105.png');
        this.load.image('earth106', './src/assets/menu/earth/0106.png');
        this.load.image('earth107', './src/assets/menu/earth/0107.png');
        this.load.image('earth108', './src/assets/menu/earth/0108.png');
        this.load.image('earth109', './src/assets/menu/earth/0109.png');
        this.load.image('earth110', './src/assets/menu/earth/0110.png');
        this.load.image('earth111', './src/assets/menu/earth/0111.png');
        this.load.image('earth112', './src/assets/menu/earth/0112.png');
        this.load.image('earth113', './src/assets/menu/earth/0113.png');
        this.load.image('earth114', './src/assets/menu/earth/0114.png');
        this.load.image('earth115', './src/assets/menu/earth/0115.png');
        this.load.image('earth116', './src/assets/menu/earth/0116.png');
        this.load.image('earth117', './src/assets/menu/earth/0117.png');
        this.load.image('earth118', './src/assets/menu/earth/0118.png');
        this.load.image('earth119', './src/assets/menu/earth/0119.png');
        
    }

    create(){
        this.background = this.add.image(0, 0, "background_menu").setOrigin(0,0);
        //this.add.image(1280, 120, "earth").setOrigin(0.5,0).setScale(1.3).setAlpha(0.5);

        this.anims.create({
            key: 'rotate',
            frames: [
                {key: "earth1"},
                {key: "earth2"},
                {key: "earth3"},
                {key: "earth4"},
                {key: "earth5"},
                {key: "earth6"},
                {key: "earth7"},
                {key: "earth8"},
                {key: "earth9"},
                {key: "earth10"},
                {key: "earth12"},
                {key: "earth13"},
                {key: "earth14"},
                {key: "earth15"},
                {key: "earth16"},
                {key: "earth17"},
                {key: "earth18"},
                {key: "earth19"},
                {key: "earth20"},
                {key: "earth21"},
                {key: "earth22"},
                {key: "earth23"},
                {key: "earth24"},
                {key: "earth25"},
                {key: "earth26"},
                {key: "earth27"},
                {key: "earth28"},
                {key: "earth29"},
                {key: "earth30"},
                {key: "earth31"},
                {key: "earth32"},
                {key: "earth33"},
                {key: "earth34"},
                {key: "earth35"},
                {key: "earth36"},
                {key: "earth37"},
                {key: "earth38"},
                {key: "earth39"},
                {key: "earth40"},
                {key: "earth41"},
                {key: "earth42"},
                {key: "earth43"},
                {key: "earth44"},
                {key: "earth45"},
                {key: "earth46"},
                {key: "earth47"},
                {key: "earth48"},
                {key: "earth49"},
                {key: "earth50"},
                {key: "earth51"},
                {key: "earth52"},
                {key: "earth53"},
                {key: "earth54"},
                {key: "earth55"},
                {key: "earth56"},
                {key: "earth57"},
                {key: "earth58"},
                {key: "earth59"},
                {key: "earth60"},
                {key: "earth61"},
                {key: "earth62"},
                {key: "earth63"},
                {key: "earth64"},
                {key: "earth65"},
                {key: "earth66"},
                {key: "earth67"},
                {key: "earth68"},
                {key: "earth69"},
                {key: "earth70"},
                {key: "earth71"},
                {key: "earth72"},
                {key: "earth73"},
                {key: "earth74"},
                {key: "earth75"},
                {key: "earth76"},
                {key: "earth77"},
                {key: "earth78"},
                {key: "earth79"},
                {key: "earth80"},
                {key: "earth81"},
                {key: "earth82"},
                {key: "earth83"},
                {key: "earth84"},
                {key: "earth85"},
                {key: "earth86"},
                {key: "earth87"},
                {key: "earth88"},
                {key: "earth89"},
                {key: "earth90"},
                {key: "earth91"},
                {key: "earth92"},
                {key: "earth93"},
                {key: "earth94"},
                {key: "earth95"},
                {key: "earth96"},
                {key: "earth97"},
                {key: "earth98"},
                {key: "earth99"},
                {key: "earth100"},
                {key: "earth101"},
                {key: "earth102"},
                {key: "earth103"},
                {key: "earth104"},
                {key: "earth105"},
                {key: "earth106"},
                {key: "earth107"},
                {key: "earth108"},
                {key: "earth109"},
                {key: "earth110"},
                {key: "earth111"},
                {key: "earth112"},
                {key: "earth113"},
                {key: "earth114"},
                {key: "earth115"},
                {key: "earth116"},
                {key: "earth117"},
                {key: "earth118"},
                {key: "earth119"}
            ],
            frameRate: 24,
            repeat: -1
        });

        //Start particle effect for Stars
        var randomPoint = {
            getRandomPoint: function (vec)
            {
                vec.x = Phaser.Math.RND.between(20, 1260);
                vec.y = Phaser.Math.RND.between(20, 620);
                return vec;
            }
        };

        var particles = this.add.particles('sparkle');
        var emitter = particles.createEmitter({
            frame: [4,5],
            alpha: {start: 0.6, end: 0.2},
            x: 0,
            y: 0,
            speed: 10,
            lifespan: 500,
            quantity: 1,
            blendMode: 'SCREEN',
            emitZone: { type: 'random', source: randomPoint }
        });

        this.add.sprite(1280, 120).setOrigin(0.5,0).setAlpha(0.85).play('rotate');
        
        this.add.image(640, 180, "debright_logo");
        var play = this.add.image(640, 300, "start_button").setAlpha(0.5).setInteractive();
        var settings = this.add.image(640, 360, "settings_button").setAlpha(0.5).setInteractive();
        var credits = this.add.image(640, 420, "credits_button").setAlpha(0.5).setInteractive();
        var quit = this.add.image(640, 480, "quit_button").setAlpha(0.5).setInteractive();

        //Button Highlight when over.
        play.on("pointerover", () => play.setAlpha(0.85).setTint(0x89CFF0), this);
        play.on("pointerout", () => play.setAlpha(0.5).setTint(0xFFFFFF), this);
        play.on("pointerdown", () => this.scene.start("Singleplayer"), this);

        settings.on("pointerover", () => settings.setAlpha(0.85).setTint(0x89CFF0), this);
        settings.on("pointerout", () => settings.setAlpha(0.5).setTint(0xFFFFFF), this);
        credits.on("pointerover", () => credits.setAlpha(0.85).setTint(0x89CFF0), this);
        credits.on("pointerout", () => credits.setAlpha(0.5).setTint(0xFFFFFF), this);
        quit.on("pointerover", () => quit.setAlpha(0.85).setTint(0x89CFF0), this);
        quit.on("pointerout", () => quit.setAlpha(0.5).setTint(0xFFFFFF), this);

        //Space Apps Logo and Link
        var space_apps = this.add.image(20, 620, "sa_logo").setOrigin(0, 1).setInteractive();
        space_apps.on("pointerdown", openSpaceAppsWeb, this);

        function openSpaceAppsWeb(){
            var url = "https://www.spaceappschallenge.org";
            var s = window.open(url, '_blank');

            if(s && s.focus){
                s.focus();
            }else if(!s){
                window.location.href = url;
            }
        }

    }

}

export default MainMenu;