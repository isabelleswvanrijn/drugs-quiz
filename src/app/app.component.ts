import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading = true;
  public loadingText = 'Loading';
  public loadingGifPath: string;
  public quizStarted = false;
  public selectedQuestionIndex = 0;
  public questions: any[];
  public selectedAnswers = [];
  public quizOver = false;
  public amountCorrect = 0;

  private loadingTextInterval: any;

  constructor() {
    this.loadingGifPath = './assets/img/loading-gif.gif';
  }

  ngOnInit() {
    const questionsJSON = {"vragen":[{"vraag":"Welke drug wordt bedoeld met deze synoniemen: sosa, sos en sneeuw?","antwoorden":{"a":"Heroïne","b":"Cocaïne","c":"Speed"},"goedAntw":"b"},{"vraag":"Op welke manieren kan cocaïne gebruikt worden?","antwoorden":{"a":"Je kan het snuiven en roken.","b":"Je kan het injecteren, snuiven, roken en inhaleren.","c":"Je kan het injecteren, roken en inhaleren."},"goedAntw":"b"},{"vraag":"Wat zijn de effecten van lachgas?","antwoorden":{"a":"Je word er lacherig en duizelig van.","b":"Het vervormt je perceptie van beeld en geluid ook word je er lacherig van en daalt je bewustzijn.","c":"Je bewustzijn daalt enorm en je word er lacherig en duizelig van."},"goedAntw":"b"},{"vraag":"Hoelang werkt ketamine ongeveer?","antwoorden":{"a":"De werking van ketamine duurt ongeveer 6 tot 7 uur.","b":"De werking van ketamine duurt ongeveer 2 tot 3 uur.","c":"De werking van ketamine duurt ongeveer 1 uur."},"goedAntw":"c"},{"vraag":"Bij welke drug heeft iemand die er verslaafd aan is proffesionele hulp nodig om af te kicken?","antwoorden":{"a":"Bij cocaïne.","b":"Bij heroïne, Ghb en Speed.","c":"bij heroïne sowieso maar bij veel andere drugs wordt het ook aangeraden."},"goedAntw":"c"},{"vraag":"In welke vorm kan je XTC/MDMA innemen?","antwoorden":{"a":"Dit kan in pilvorm.","b":"Dit kan in poedervorm en pilvorm.","c":"Dit kan in poedervorm, pilvorm en je kan het in voedsel verwerken en eten."},"goedAntw":"b"},{"vraag":"Hoe kan je cannabis innemen?","antwoorden":{"a":"Je kan het roken en in dampvorm inhaleren.","b":"Je kan het in eten verwerken, het inhaleren via dampen en je kan het roken.","c":"Je kan het in eten en drinken verwerken, het inhaleren via dampen en  je kan het roken ."},"goedAntw":"c"},{"vraag":"Wat zijn de effecten van cannabis/marihuana?","antwoorden":{"a":"Rode ogen, versnelde hartslag, droge mond spierverslapping en je krijgt een vreetkick.","b":"Rode ogen, versnelde hartslag, spierverslpping en een beter geheugen.","c":"Rode ogen, vertraagde hartslag, een vreetkick en spierverslapping."},"goedAntw":"a"},{"vraag":"wat zijn de risico's van cannabis gebruik op korte termijn?","antwoorden":{"a":"Misselijkheid en braken, flauwvallen, angstige gevoelens en concentratieproblemen.","b":"Verslaving, depressie, fauwvallen, concentratieproblemen en gewichtsverlies.","c":"Angstige gevoelens, misselijkheid en braken, flauwvallen en concentratieproblemen."},"goedAntw":"a"},{"vraag":"Wat zijn andere namen voor Cannabis?","antwoorden":{"a":"Marihuana, hasj en THC.","b":"Marihuana, hasj, wiet en CBD.","c":"Marihuana, hasj en wiet."},"goedAntw":"c"},{"vraag":"Waar staat GHB voor?","antwoorden":{"a":"Gamma-hydroxyboterzuur.","b":"Gehydroxeerde-benzo's.","c":"Gele hotbox drug."},"goedAntw":"a"},{"vraag":"Hoeveel gram cannabis mag je bij je dragen in het openbaar?","antwoorden":{"a":"5 gram.","b":"5,5 gram.","c":"3,5 gram."},"goedAntw":"a"},{"vraag":"Welke drug kan worden gemaakt van gootsteenontstopper en schoonmaakmiddelen?","antwoorden":{"a":"Cocaïne.","b":"XTC.","c":"GHB."},"goedAntw":"c"},{"vraag":"Kan je verslaafd raken aan cannabis?","antwoorden":{"a":"Ja dit kan doordat er een verslavend middel in zit.","b":"Nee dit kan niet.","c":"Ja dit kan omdat je er gestelijk afhankelijk van kunt worden."},"goedAntw":"c"},{"vraag":"Welke drug wordt met de volgende bijnamen bedoeld: Special K en vitamine K?","antwoorden":{"a":"Kionex.","b":"Kytril.","c":"Ketamine."},"goedAntw":"c"},{"vraag":"Hoe wordt lachgas gebruikt?","antwoorden":{"a":"Het wordt uit een slagroomspuit gespoten en geinhaleerd.","b":"Via slagroompatronen wordt het in een slagroompatroon gedaan en in een ballon gespoten vervolgens geïnhaleerd","c":"Het wordt uit een slagroompatroon in een ballon gespoten en dan wordt het in één keer geïnhaleerd."},"goedAntw":"b"},{"vraag":"Er zijn verschillende vormpjes van XTC pillen, bevat een bepaald vormpje altijd dezelfde stoffen?","antwoorden":{"a":"Ja een voormpje zoals bijvoorbeeld een diamantje moet bepaalde hoveelheden erin hebben.","b":"Nee elk vormpje is puur ter decoratie hierdoor kan je nooit weten watvoor een pil het is.","c":"Nee, de vormpjes kunnen wel aangegeven of het van een bepaalde 'batch' afkomstig is maar dit weet je nooit zeker."},"goedAntw":"c"},{"vraag":"Welke drug wordt er met amfetamine bedoeld?","antwoorden":{"a":"Heroïne.","b":"Speed.","c":"GHB."},"goedAntw":"b"},{"vraag":"Als iemand beide speed en Cannabis gebruikt wat is het grootste risico dat hij/zij dan loopt?","antwoorden":{"a":"Uitdroging.","b":"Hartstilstand.","c":"Psychose."},"goedAntw":"c"},{"vraag":"Hoelaang duurt het voordat één glas alcohol uit je lichaam is verwerkt?","antwoorden":{"a":"1 uur en 3 kwartier.","b":"1,5 uur.","c":"1 tot 1,5 uur."},"goedAntw":"c"},{"vraag":"Wat zijn de types waar drugs in onder worden gedeeld?","antwoorden":{"a":"Stimulerend, verdovend en hailucinerend.","b":"Stimulerend, opwekkend en verdovend.","c":"Stimulerend, verdoven, hallucinerend en verslavend."},"goedAntw":"a"},{"vraag":"Op hoeveel procent van bankbilljetten zitten sporen van cocaïne?","antwoorden":{"a":"Ongeveer 10 tot 20%.","b":"Ongeveer 50 tot 60%.","c":"Ongeveer 80 tot 90%."},"goedAntw":"c"},{"vraag":"Met welke middelen kan er een goedkopere vorm van heroïne gemaakt worden?","antwoorden":{"a":"Diesel, gootsteenontstopper en ethanol","b":"Water, keukenzout, dopamine en chloor .","c":"Benzine, fosfor en zoutzuur."},"goedAntw":"c"},{"vraag":"Hoeveel milligram MDMA zit er doorgaans in een XTC pil?","antwoorden":{"a":"80 mg.","b":"120 mg.","c":"140 mg."},"goedAntw":"c"},{"vraag":"Hoeveel lijntjes coke worden er ongeveer dagelijks in Amsterdam gesnoven?","antwoorden":{"a":"Tussen de 1000 en 2000.","b":"Tussen de 20.000 en 30.000.","c":"Tussen de 9000 en 11.000."},"goedAntw":"b"},{"vraag":"Van welke specerij kun je high worden maar krijg je vaak een bad trip van?","antwoorden":{"a":"Nootmuskaat.","b":"Saffraan.","c":"Gember."},"goedAntw":"a"},{"vraag":"Wat kregen soldaten in de 2e wereldoorlog welleens om langer fit en alert te blijven?","antwoorden":{"a":"Cocaïne.","b":"Speed.","c":"GHB."},"goedAntw":"b"},{"vraag":"Energiedrankjes bevatten altijd de stoffen?","antwoorden":{"a":"Cafeïne, glucose, taurine .","b":"Suiker, zout en glucagon.","c":"Dopamine, glucose en zout."},"goedAntw":"a"}]};
    this.questions = this.shuffleQuestions(questionsJSON.vragen).slice(18);
    this.loadingTextInterval = setInterval(() => {
      this.loadingText += '.';
    }, 500);

    setTimeout(() => {
      this.isLoading = false;
      clearInterval(this.loadingTextInterval);
      document.getElementById('startModalOpen').click();
    }, 3000);
  }

  public reload(): void {
    location.reload();
  }

  public selectAnswer(answer: string): void {
    if (!this.quizOver) {
      const question = this.questions[this.selectedQuestionIndex];

      if (question.goedAntw === answer) {
        this.amountCorrect++;
        this.selectedAnswers.push({ "selected" : answer, "correct" : "goed"});
      } else {
        this.selectedAnswers.push({ "selected" : answer, "correct" : "fout"});
      }
      this.selectedQuestionIndex++;
      if (this.selectedQuestionIndex === 10) {
        this.quizOver = true;
        document.getElementById('endModalOpen').click();
      }
    } else {
      this.selectedQuestionIndex++;
      if (this.selectedQuestionIndex === 10) {
        document.getElementById('resetModalOpen').click();
      }
    }
  }

  private shuffleQuestions(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
