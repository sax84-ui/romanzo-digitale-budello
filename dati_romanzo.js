/*
  =============================================================
  == FILE DATI ROMANZO ==
  =============================================================
  Ciao! Questo è il file "sicuro" dove puoi aggiungere o 
  modificare i capitoli del tuo romanzo.

  NON TOCCARE NULLA nel file .html! Lavora solo qui.

  COME AGGIUNGERE UN NUOVO CAPITOLO:
  1. Vai in fondo alla lista "chapters: [ ... ]".
  2. Copia e incolla questo blocco di codice DOPO l'ultima
     parentesi } e PRIMA della parentesi ] finale.
  3. Assicurati che ci sia una VIRGOLA (,) tra un capitolo e l'altro.

  BLOCCO DA COPIARE:

    {
        title: "Titolo del tuo nuovo capitolo",
        content: `
    Scrivi qui il primo paragrafo. Lascia una riga vuota per 
    creare un nuovo paragrafo.

    Questo è il secondo paragrafo. Vedi? È facile.

    Puoi scrivere quanto vuoi. L'importante è che tutto il testo
    sia compreso tra questi due simboli: \` (backtick).
    `
    },

  =============================================================
*/

const bookData = {
    mainTitle: "La Saga della Banda del Budello di tu Mà",
    subTitle: "Volume I: La Decapitalizzazione di Canazzo",
    author: "Warry, Jess, Sax, Wolf",
    coverImageUrl: "https://picsum.photos/id/24/256/384", // Immagine segnaposto
    chapters: [
        {
            title: "Prologo: Il Budello di tu Mà ",
            content: `Cronache di un Regno Assurdo.

        C'era una volta, in un angolo dimenticato sia dalle mappe che dal buon senso, il Regno del Budello di tu Mà.

        Qui la fisica era solo un'opinione discutibile, le montagne profumavano di fritto mattutino e le foreste sussurravano insulti ai passanti con la grazia di una zia polemica durante un pranzo domenicale. La vita scorreva tra fiumi di birra nera e tempeste di coriandoli di sesamo, in un caos che avrebbe fatto impallidire persino il traffico di Napoli all'ora di punta.

        Le città poggiavano su fondamenta di pane tostato raffermo, i castelli sfoggiavano torri di mortadella stagionata e le piazze ospitavano duelli a colpi di rutto, dove il vincitore veniva incoronato con una corona di cipolla caramellata.
        
        Gli abitanti? Un bestiario degno di una televendita notturna andata storta: ex eroi con la gloria scaduta come yogurt dimenticato, bestie assemblate con più entusiasmo che precisione ingegneristica, piovre e leprecauni che rappavano meglio di quanto sapessero nuotare o fare magie, barbari filosofi che lucidavano il machete mentre discutevano di etica kantiana, e dinosauri bendati guidati dal cordyceps come taxi impazziti.
        
        Nessuno era davvero normale. E chi lo era? Veniva spedito altrove con un biglietto di sola andata e gli auguri di buon viaggio.`
		},

		{
		    title: "Prologo (Parte 2)",
		    content: ` Nessuno era davvero normale, e chi lo era veniva spedito altrove con un biglietto di sola andata.

		Così, tra una battaglia contro i Crackers e una fuga dai Vermugi, nacquero legami indissolubili:

		Ma non era sempre stato così. Un tempo, il Budello era un regno di pace e rutti controllati, governato da sovrani eccentrici e cuochi visionari. Poi, dalle profondità del Monte Coolo, emerse una minaccia: Canazzo, il Signore Oscuro, deciso a decapitalizzare tutto ciò che aveva un senso (e anche ciò che non ne aveva). Con la sua armata di infetti, panini senzienti e giganti dal cuore tenero, gettò il regno nel più totale scompiglio.

		Da allora, il disordine regnava sovrano. Le centaure precipitavano dagli aerei di linea, i panini prendevano vita e i funghi declamavano poesie dialettali. Le profezie, scritte su tovaglioli unti e tramandate nei peggiori bar del regno, parlavano di una banda di eroi improbabili, destinati a salvare il Budello… o almeno a renderlo ancora più assurdo.
		
		Warry, la fusione tra scimmia e capra, armato di padella e coltelli magici, capace di ruttare con la forza di un temporale e la grazia di una televendita notturna;
		
		Jess, la misteriosa esperta di rutti, a cavallo di un dinosauro e botanica estrema, che comunicava più con versi gutturali che con le parole;
		
		Sax, la piovra rapper dal groove irresistibile, con più tentacoli che problemi;
		
		Wolf, il barbaro sadico che trovava gioia solo nel caos, sempre pronto a testare i limiti della crudeltà… e della pazienza altrui.`
                },

		{
		    title: "Prologo (Parte 3)",
		    content: `E fu così che la leggenda prese forma, accompagnata da una profezia che nessuno ricordava per intero, ma che suonava più o meno così:

		“Quando il Budello sarà in fermento, e il panino camminerà tra i mortali, quattro tizi, uniti dal rutto e dal tormento, salveranno il regno… o lo getteranno in guai colossali. Quando il sesamo cadrà come pioggia impazzita, e la birra scorrerà tra le strade smarrite, quando il fritto sarà legge e la logica svanirà, solo il nonsense regnerà.

		Sarà allora che il caos prenderà forma, tra padelle magiche e criniere che si perdono, tra rutti che scuotono le montagne, e tentacoli che danzano sotto la luna strana. Nel giorno in cui la foresta insulterà a gran voce chi passa, e i funghi declameranno versi di piazza, quando i giganti cadranno e i panini si ribelleranno, solo chi vive di assurdo la notte rischiarerà.`
		},

		{
		    title: "Prologo (Parte 4)",
		    content: `Quattro spiriti folli, diversi e ribelli,
		
		uno che usa coltelli da televendita,
		
		uno che parla alle piante con rutti novelli,

		uno che rappa e muove tentacoli e non le dita,

		uno che trova gioia nel caos e nei duelli.

		Così narra la profezia della profezia, scritta su tovagliolini unti, tra una birra, una risata e rutti profondi:

		“Nel giorno in cui il nonsense regnerà sovrano, quattro eroi assurdi salveranno il reame strano.

		Ma attenti, o popoli del Budello, che il confine tra salvezza e disastro è sottile come un velo:

		se il rutto sarà debole, il caos avanzerà, ma se riderete insieme… il Budello trionferà!””

		Questa è la loro saga.
		
		O forse solo il loro rutto più epico.`
		}
        // <-- AGGIUNGI QUI IL TUO PROSSIMO CAPITOLO
        // (Ricorda di copiare il blocco di esempio qui sopra
        // e di mettere la virgola alla fine di questo capitolo!)
    ]
};