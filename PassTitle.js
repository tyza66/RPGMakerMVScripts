//打开直接跳过Title界面，死亡跳过Title界面，失败跳过Title界面， 回标题跳过，打开游戏直接到初始界面。
(function() {

    Scene_Boot.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        SoundManager.preloadImportantSounds();
        if (DataManager.isBattleTest()) {
            DataManager.setupBattleTest();
            SceneManager.goto(Scene_Battle);
        } else {
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            SceneManager.goto(Scene_Map);
        }
        this.updateDocumentTitle();
    };

    Scene_Gameover.prototype.gotoTitle = function() {
        $dataSystem.optAutosave = false;
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
    };

    Scene_GameEnd.prototype.commandToTitle = function() {
        $dataSystem.optAutosave = false;
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
    };

    Game_Interpreter.prototype.command354 = function() {
        $dataSystem.optAutosave = false;
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
        return true;
    };

})();