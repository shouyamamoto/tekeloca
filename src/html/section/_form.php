<section class="form" id="form">
    <div class="form-container">
        <h2 class="section-title">撮影依頼はこちらから</h2>
        <form action="mail.php" method="post">
            <ul class="form-items">
                <li class="form-item">
                    <label for="name"><span class="need">必須</span>お名前</label>
                    <input type="text" id="name" name="お名前" placeholder="例) 山本　花子" required>
                </li>

                <li class="form-item">
                    <label for="tel"><span class="need">必須</span>電話番号</label>
                    <input type="tel" id="tel" name="電話番号" placeholder="例) 080-1111-2222" required>
                </li>

                <li class="form-item">
                    <label for="mail"><span class="need">必須</span>メールアドレス</label>
                    <input type="text" id="mail" name="メールアドレス" placeholder="例) example@gmail.com" required>
                </li>

                <li class="form-item">
                    <label for="place"><span class="need">必須</span>撮影希望場所</label>
                    <input type="text" id="place" name="撮影希望場所" placeholder="例) 大阪府 万博記念公園" required>
                </li>

                <li class="form-item">
                    <label for="day"><span class="need">必須</span>撮影希望日</label>
                    <input type="date" id="day" name="撮影希望日" required>
                </li>

                <li class="form-item">
                    <label><span class="need">必須</span>撮影プラン</label>
                    <ul>
                        <li class="form-item__plan">
                            <input type="radio" name="撮影プラン" id="icon" value="アイコン撮影プラン" checked>
                            <label for="icon">アイコン撮影プラン</label>
                        </li>

                        <li class="form-item__plan">
                            <input type="radio" name="撮影プラン" id="couple" value="カップル撮影プラン">
                            <label for="couple">カップル撮影プラン</label>
                        </li>

                        <li class="form-item__plan">
                            <input type="radio" name="撮影プラン" id="wedding"　value="結婚式撮影プラン">
                            <label for="wedding">結婚式撮影プラン</label>
                        </li>
                    </ul>
                </li>
                
                <li class="form-item">
                    <label for="line"><span class="any">任意</span>LINE ID</label>
                    <input type="text" id="line" name="LINE-ID" placeholder="例) yamadahanako0101">
                </li>

                <li class="form-item">
                    <label for="other"><span class="any">任意</span>その他</label>
                    <textarea name="その他" id="other" cols="30" rows="10" placeholder="撮影のイメージ、お二人の馴れ初め、サプライズの内容などなんでもよろしいので、あなたの人柄やご希望があれば教えてください。"></textarea>
                </li>
            </ul>

            <button>
                <input type="submit" value="入力内容を確認する">
            </button>
        </form>
    </div>
    
</section>