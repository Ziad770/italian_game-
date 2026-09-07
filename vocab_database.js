// vocab_database.js - Verified Natural Italian Corpus (No Synthetic Typos)
(function() {
    "use strict";
  
    const AUTHENTIC_CORPUS = [
      // ==========================================
      // 1. VERBI (Verbs) - Pure Infinitives
      // ==========================================
      // A1 - Fondamentali
      { it: "Essere", en: "To be", pos: "verb", cefr: "A1", cat: "quotidiani", ex: "Essere puntuali è segno di rispetto.", exEn: "To be punctual is a sign of respect." },
      { it: "Avere", en: "To have", pos: "verb", cefr: "A1", cat: "quotidiani", ex: "Bisogna avere pazienza nelle difficoltà.", exEn: "One must have patience in difficulties." },
      { it: "Andare", en: "To go", pos: "verb", cefr: "A1", cat: "viaggio", ex: "Vado alla stazione in bicicletta.", exEn: "I go to the station by bicycle." },
      { it: "Venire", en: "To come", pos: "verb", cefr: "A1", cat: "quotidiani", ex: "Vieni a trovarci questa sera?", exEn: "Are you coming to visit us this evening?" },
      { it: "Fare", en: "To do / make", pos: "verb", cefr: "A1", cat: "quotidiani", ex: "Cosa intendi fare dopo pranzo?", exEn: "What do you plan to do after lunch?" },
      { it: "Dire", en: "To say / tell", pos: "verb", cefr: "A1", cat: "scuola", ex: "Dimmi esattamente come sono andate le cose.", exEn: "Tell me exactly how things went." },
      { it: "Potere", en: "To be able / can", pos: "verb", cefr: "A1", cat: "quotidiani", ex: "Possiamo entrare nella sala?", exEn: "Can we enter the hall?" },
      { it: "Volere", en: "To want", pos: "verb", cefr: "A1", cat: "emozioni", ex: "Voglio perfezionare la lingua italiana.", exEn: "I want to perfect the Italian language." },
      { it: "Dovere", en: "To have to / must", pos: "verb", cefr: "A1", cat: "lavoro", ex: "Dobbiamo rispettare la consegna fissata.", exEn: "We must meet the agreed deadline." },
      { it: "Sapere", en: "To know (fact)", pos: "verb", cefr: "A1", cat: "scuola", ex: "Non so a che ora parta il treno.", exEn: "I do not know what time the train leaves." },
      { it: "Mangiare", en: "To eat", pos: "verb", cefr: "A1", cat: "cibo", ex: "Preferisco mangiare cibi freschi e leggeri.", exEn: "I prefer to eat fresh, light food." },
      { it: "Bere", en: "To drink", pos: "verb", cefr: "A1", cat: "cibo", ex: "Bisogna bere almeno due litri d'acqua al giorno.", exEn: "One should drink at least two liters of water a day." },
      { it: "Dormire", en: "To sleep", pos: "verb", cefr: "A1", cat: "corpo", ex: "Dormire otto ore aiuta il corpo a rigenerarsi.", exEn: "Sleeping eight hours helps the body regenerate." },
      { it: "Parlare", en: "To speak", pos: "verb", cefr: "A1", cat: "scuola", ex: "Parliamo italiano per fare pratica.", exEn: "Let's speak Italian to practice." },
      { it: "Leggere", en: "To read", pos: "verb", cefr: "A1", cat: "scuola", ex: "Amo leggere romanzi storici la sera.", exEn: "I love reading historical novels in the evening." },
      { it: "Scrivere", en: "To write", pos: "verb", cefr: "A1", cat: "scuola", ex: "Scrivo un messaggio al mio collega.", exEn: "I write a message to my colleague." },
      { it: "Ascoltare", en: "To listen", pos: "verb", cefr: "A1", cat: "scuola", ex: "Ascoltare con attenzione evita incomprensioni.", exEn: "Listening carefully prevents misunderstandings." },
      { it: "Vedere", en: "To see", pos: "verb", cefr: "A1", cat: "corpo", ex: "Non riesco a vedere bene da questa distanza.", exEn: "I cannot see well from this distance." },
      { it: "Prendere", en: "To take", pos: "verb", cefr: "A1", cat: "viaggio", ex: "Prendiamo l'autobus delle otto.", exEn: "Let's take the eight o'clock bus." },
      { it: "Aprire", en: "To open", pos: "verb", cefr: "A1", cat: "casa", ex: "Apri la finestra per far entrare aria fresca.", exEn: "Open the window to let fresh air in." },
      { it: "Chiudere", en: "To close", pos: "verb", cefr: "A1", cat: "casa", ex: "Ricorda di chiudere la porta a chiave.", exEn: "Remember to lock the door." },
      { it: "Abitare", en: "To live / reside", pos: "verb", cefr: "A1", cat: "casa", ex: "Abitiamo in centro storico.", exEn: "We live in the historic center." },
  
      // A2 - Vita quotidiana e Azioni
      { it: "Comprare", en: "To buy", pos: "verb", cefr: "A2", cat: "lavoro", ex: "Devo comprare della frutta al mercato.", exEn: "I need to buy some fruit at the market." },
      { it: "Vendere", en: "To sell", pos: "verb", cefr: "A2", cat: "lavoro", ex: "Hanno deciso di vendere la vecchia auto.", exEn: "They decided to sell the old car." },
      { it: "Cucinare", en: "To cook", pos: "verb", cefr: "A2", cat: "cibo", ex: "Cucinare piatti tradizionali richiede tempo.", exEn: "Cooking traditional dishes takes time." },
      { it: "Viaggiare", en: "To travel", pos: "verb", cefr: "A2", cat: "viaggio", ex: "Viaggiare permette di conoscere culture diverse.", exEn: "Traveling allows one to get to know different cultures." },
      { it: "Camminare", en: "To walk", pos: "verb", cefr: "A2", cat: "corpo", ex: "Camminare mezz'ora al giorno mantiene in salute.", exEn: "Walking half an hour a day keeps you healthy." },
      { it: "Correre", en: "To run", pos: "verb", cefr: "A2", cat: "corpo", ex: "Corre ogni mattina prima di andare al lavoro.", exEn: "He runs every morning before going to work." },
      { it: "Chiedere", en: "To ask", pos: "verb", cefr: "A2", cat: "scuola", ex: "Chiediamo informazioni all'ufficio turistico.", exEn: "Let's ask the tourist office for information." },
      { it: "Rispondere", en: "To answer", pos: "verb", cefr: "A2", cat: "lavoro", ex: "Risponderò alla tua email entro domani.", exEn: "I will answer your email by tomorrow." },
      { it: "Trovare", en: "To find", pos: "verb", cefr: "A2", cat: "casa", ex: "Ho trovato le chiavi sul tavolo.", exEn: "I found the keys on the table." },
      { it: "Cercare", en: "To search / look for", pos: "verb", cefr: "A2", cat: "quotidiani", ex: "Sto cercando un appartamento in affitto.", exEn: "I am looking for an apartment to rent." },
      { it: "Pagare", en: "To pay", pos: "verb", cefr: "A2", cat: "lavoro", ex: "È possibile pagare con carta di credito.", exEn: "It is possible to pay with a credit card." },
      { it: "Pulire", en: "To clean", pos: "verb", cefr: "A2", cat: "casa", ex: "Pulisco la cucina dopo aver preparato la cena.", exEn: "I clean the kitchen after preparing dinner." },
  
      // B1 - Intermedio
      { it: "Raggiungere", en: "To reach / achieve", pos: "verb", cefr: "B1", cat: "viaggio", ex: "Speriamo di raggiungere l'albergo in orario.", exEn: "We hope to reach the hotel on time." },
      { it: "Risolvere", en: "To resolve / solve", pos: "verb", cefr: "B1", cat: "lavoro", ex: "Abbiamo risolto la controversia rapidamente.", exEn: "We resolved the dispute quickly." },
      { it: "Sviluppare", en: "To develop", pos: "verb", cefr: "B1", cat: "lavoro", ex: "L'azienda sviluppa nuove tecnologie sostenibili.", exEn: "The company develops new sustainable technologies." },
      { it: "Accorgersi", en: "To notice / realize", pos: "verb", cefr: "B1", cat: "emozioni", ex: "Mi sono accorto subito del cambiamento.", exEn: "I noticed the change immediately." },
      { it: "Accogliere", en: "To welcome / receive", pos: "verb", cefr: "B1", cat: "casa", ex: "La comunità sa accogliere i visitatori.", exEn: "The community knows how to welcome visitors." },
      { it: "Migliorare", en: "To improve", pos: "verb", cefr: "B1", cat: "scuola", ex: "Con l'esercizio costante possiamo migliorare.", exEn: "With constant practice we can improve." },
      { it: "Condividere", en: "To share", pos: "verb", cefr: "B1", cat: "emozioni", ex: "Condivido appieno la tua riflessione.", exEn: "I completely share your reflection." },
      { it: "Sperare", en: "To hope", pos: "verb", cefr: "B1", cat: "emozioni", ex: "Speriamo che il tempo rimanga sereno.", exEn: "We hope the weather stays clear." },
  
      // B2 / C1 - Avanzato & Accademico
      { it: "Coinvolgere", en: "To involve / engage", pos: "verb", cefr: "B2", cat: "scuola", ex: "Il progetto punta a coinvolgere i cittadini.", exEn: "The project aims to involve citizens." },
      { it: "Approfondire", en: "To study in depth", pos: "verb", cefr: "B2", cat: "scuola", ex: "È doveroso approfondire questo fenomeno storico.", exEn: "It is necessary to examine this historical phenomenon in depth." },
      { it: "Intraprendere", en: "To undertake", pos: "verb", cefr: "B2", cat: "lavoro", ex: "Ha deciso di intraprendere una nuova carriera.", exEn: "He decided to undertake a new career." },
      { it: "Sostenere", en: "To support / maintain", pos: "verb", cefr: "B2", cat: "lavoro", ex: "Le prove raccolte sostengono l'ipotesi.", exEn: "The collected evidence supports the hypothesis." },
      { it: "Contraddistinguere", en: "To distinguish", pos: "verb", cefr: "B2", cat: "aggettivi", ex: "L'accuratezza contraddistingue il suo operato.", exEn: "Accuracy distinguishes his work." },
      { it: "Scaturire", en: "To stem / arise from", pos: "verb", cefr: "C1", cat: "scuola", ex: "La soluzione è scaturita da un confronto aperto.", exEn: "The solution arose from an open discussion." },
      { it: "Fungere", en: "To serve as / act as", pos: "verb", cefr: "C1", cat: "lavoro", ex: "Il comitato fungerà da organo di controllo.", exEn: "The committee will serve as an oversight body." },
      { it: "Sviscerare", en: "To dissect / scrutinize", pos: "verb", cefr: "C1", cat: "scuola", ex: "L'oratore ha sviscerato gli aspetti più complessi del testo.", exEn: "The speaker dissected the most complex aspects of the text." },
      { it: "Palesare", en: "To reveal / disclose", pos: "verb", cefr: "C1", cat: "emozioni", ex: "Ha preferito non palesare i propri timori.", exEn: "She preferred not to disclose her fears." },
      { it: "Elucubrare", en: "To ruminate / ponder deeply", pos: "verb", cefr: "C1", cat: "scuola", ex: "Non serve elucubrare teorie senza riscontri pratici.", exEn: "There is no use ruminating theories without practical evidence." },
  
      // ==========================================
      // 2. SOSTANTIVI (Nouns)
      // ==========================================
      { it: "Casa", en: "House / Home", pos: "noun", cefr: "A1", cat: "casa", ex: "La casa è situata in una zona tranquilla.", exEn: "The house is situated in a quiet area." },
      { it: "Porta", en: "Door", pos: "noun", cefr: "A1", cat: "casa", ex: "Bussarono con insistenza alla porta.", exEn: "They knocked insistently on the door." },
      { it: "Finestra", en: "Window", pos: "noun", cefr: "A1", cat: "casa", ex: "La finestra si affaccia sul giardino fiorito.", exEn: "The window overlooks the blooming garden." },
      { it: "Tavolo", en: "Table", pos: "noun", cefr: "A1", cat: "casa", ex: "I documenti sono ordinati sopra il tavolo.", exEn: "The documents are organized on the table." },
      { it: "Sedia", en: "Chair", pos: "noun", cefr: "A1", cat: "casa", ex: "Accomodati su questa sedia accanto al camino.", exEn: "Have a seat on this chair next to the fireplace." },
      { it: "Stanza", en: "Room", pos: "noun", cefr: "A1", cat: "casa", ex: "Questa stanza riceve molta luce naturale.", exEn: "This room receives a lot of natural light." },
      { it: "Cucina", en: "Kitchen", pos: "noun", cefr: "A1", cat: "casa", ex: "La cucina è il cuore accogliente della casa.", exEn: "The kitchen is the welcoming heart of the house." },
      { it: "Bagno", en: "Bathroom", pos: "noun", cefr: "A1", cat: "casa", ex: "Il bagno è stato appena ristrutturato.", exEn: "The bathroom was just renovated." },
      { it: "Letto", en: "Bed", pos: "noun", cefr: "A1", cat: "casa", ex: "Un letto comodo garantisce un riposo sereno.", exEn: "A comfortable bed ensures restful sleep." },
      { it: "Cibo", en: "Food", pos: "noun", cefr: "A1", cat: "cibo", ex: "Il cibo locale offre sapori autentici.", exEn: "Local food offers authentic flavors." },
      { it: "Pane", en: "Bread", pos: "noun", cefr: "A1", cat: "cibo", ex: "Spezzare il pane insieme è rito di condivisione.", exEn: "Breaking bread together is a ritual of sharing." },
      { it: "Acqua", en: "Water", pos: "noun", cefr: "A1", cat: "cibo", ex: "L'acqua pura di sorgente è una risorsa preziosa.", exEn: "Pure spring water is a precious resource." },
      { it: "Vino", en: "Wine", pos: "noun", cefr: "A1", cat: "cibo", ex: "Un calice di vino accompagna la cena.", exEn: "A glass of wine accompanies dinner." },
      { it: "Carne", en: "Meat", pos: "noun", cefr: "A1", cat: "cibo", ex: "Hanno preparato carne grigliata con rosmarino.", exEn: "They prepared grilled meat with rosemary." },
      { it: "Pesce", en: "Fish", pos: "noun", cefr: "A1", cat: "cibo", ex: "Il mercato del porto vende pesce freschissimo.", exEn: "The port market sells very fresh fish." },
      { it: "Frutta", en: "Fruit", pos: "noun", cefr: "A1", cat: "cibo", ex: "La frutta estiva è ricca di vitamine.", exEn: "Summer fruit is rich in vitamins." },
      { it: "Verdura", en: "Vegetables", pos: "noun", cefr: "A1", cat: "cibo", ex: "Consumare verdura cruda fa bene alla salute.", exEn: "Consuming raw vegetables is good for health." },
      { it: "Strada", en: "Street / Road", pos: "noun", cefr: "A1", cat: "viaggio", ex: "La strada provinciale attraversa i vigneti.", exEn: "The provincial road crosses the vineyards." },
      { it: "Piazza", en: "Square", pos: "noun", cefr: "A1", cat: "viaggio", ex: "La piazza del borgo è animata la domenica.", exEn: "The village square is lively on Sunday." },
      { it: "Città", en: "City", pos: "noun", cefr: "A1", cat: "viaggio", ex: "Ogni città custodisce memorie uniche.", exEn: "Every city preserves unique memories." },
      { it: "Stazione", en: "Station", pos: "noun", cefr: "A2", cat: "viaggio", ex: "Ci siamo dati appuntamento davanti alla stazione.", exEn: "We arranged to meet in front of the station." },
      { it: "Treno", en: "Train", pos: "noun", cefr: "A2", cat: "viaggio", ex: "Il treno regionale viaggia con dieci minuti di anticipo.", exEn: "The regional train is traveling ten minutes early." },
      { it: "Biglietto", en: "Ticket", pos: "noun", cefr: "A2", cat: "viaggio", ex: "Conserva il biglietto per l'uscita dai tornelli.", exEn: "Keep the ticket to exit the turnstiles." },
      { it: "Valigia", en: "Suitcase", pos: "noun", cefr: "A2", cat: "viaggio", ex: "La valigia contiene tutto il necessario.", exEn: "The suitcase contains everything necessary." },
      { it: "Aeroporto", en: "Airport", pos: "noun", cefr: "A2", cat: "viaggio", ex: "I controlli di sicurezza in aeroporto procedono spediti.", exEn: "Security checks at the airport proceed swiftly." },
      { it: "Ufficio", en: "Office", pos: "noun", cefr: "A2", cat: "lavoro", ex: "L'ufficio rimarrà chiuso durante le festività.", exEn: "The office will remain closed during the holidays." },
      { it: "Stipendio", en: "Salary", pos: "noun", cefr: "A2", cat: "lavoro", ex: "Lo stipendio garantisce serenità economica.", exEn: "The salary provides financial peace of mind." },
      { it: "Contratto", en: "Contract", pos: "noun", cefr: "B1", cat: "lavoro", ex: "Le parti hanno sottoscritto l'accordo contrattuale.", exEn: "The parties signed the contractual agreement." },
      { it: "Traguardo", en: "Milestone", pos: "noun", cefr: "B1", cat: "lavoro", ex: "Il superamento della prova costituisce un traguardo importante.", exEn: "Passing the test constitutes an important milestone." },
      { it: "Opportunità", en: "Opportunity", pos: "noun", cefr: "B1", cat: "lavoro", ex: "Non bisogna esitare davanti a un'opportunità simile.", exEn: "One must not hesitate before such an opportunity." },
      { it: "Paesaggio", en: "Landscape", pos: "noun", cefr: "B1", cat: "viaggio", ex: "Dalla collina si ammira un paesaggio suggestivo.", exEn: "From the hill one admires a picturesque landscape." },
      { it: "Consapevolezza", en: "Awareness", pos: "noun", cefr: "B2", cat: "emozioni", ex: "La consapevolezza delle proprie azioni genera responsabilità.", exEn: "Awareness of one's actions generates responsibility." },
      { it: "Sfumatura", en: "Nuance", pos: "noun", cefr: "B2", cat: "scuola", ex: "L'autore esplora ogni sfumatura emotiva del personaggio.", exEn: "The author explores every emotional nuance of the character." },
      { it: "Retaggio", en: "Heritage / Legacy", pos: "noun", cefr: "C1", cat: "scuola", ex: "Il patrimonio artistico è un retaggio inestimabile.", exEn: "The artistic heritage is an invaluable legacy." },
      { it: "Discrepanza", en: "Discrepancy", pos: "noun", cefr: "C1", cat: "lavoro", ex: "I revisori hanno rilevato una discrepanza nei calcoli.", exEn: "The auditors detected a discrepancy in the calculations." },
  
      // ==========================================
      // 3. AGGETTIVI (Adjectives)
      // ==========================================
      { it: "Grande", en: "Big / Large", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Hanno allestito una grande mostra d'arte.", exEn: "They set up a large art exhibition." },
      { it: "Piccolo", en: "Small", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Un piccolo dettaglio può fare la differenza.", exEn: "A small detail can make the difference." },
      { it: "Bello", en: "Beautiful", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Il tramonto sul golfo offre un panorama bello e sereno.", exEn: "The sunset over the gulf offers a beautiful, serene view." },
      { it: "Buono", en: "Good", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Questo pane cotto a legna è particolarmente buono.", exEn: "This wood-fired bread is especially good." },
      { it: "Nuovo", en: "New", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Hanno introdotto un nuovo regolamento interno.", exEn: "They introduced a new internal regulation." },
      { it: "Vecchio", en: "Old", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Il vecchio ponte in pietra resiste alle piene.", exEn: "The old stone bridge withstands floods." },
      { it: "Caldo", en: "Hot / Warm", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Oggi l'aria primaverile è tiepida e calda.", exEn: "Today the spring air is mild and warm." },
      { it: "Freddo", en: "Cold", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Il vento alpino è pungente e freddo.", exEn: "The alpine wind is sharp and cold." },
      { it: "Facile", en: "Easy", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Il primo esercizio di grammatica è molto facile.", exEn: "The first grammar exercise is very easy." },
      { it: "Difficile", en: "Difficult", pos: "adjective", cefr: "A1", cat: "aggettivi", ex: "Mantenere la calma nei momenti critici è difficile.", exEn: "Staying calm in critical moments is difficult." },
      { it: "Veloce", en: "Fast", pos: "adjective", cefr: "A2", cat: "aggettivi", ex: "La consegna del pacco è stata veloce e precisa.", exEn: "The parcel delivery was fast and accurate." },
      { it: "Lento", en: "Slow", pos: "adjective", cefr: "A2", cat: "aggettivi", ex: "Un ritmo lento favorisce la concentrazione.", exEn: "A slow pace fosters concentration." },
      { it: "Chiaro", en: "Clear", pos: "adjective", cefr: "A2", cat: "aggettivi", ex: "La spiegazione del professore è stata chiara.", exEn: "The professor's explanation was clear." },
      { it: "Scuro", en: "Dark", pos: "adjective", cefr: "A2", cat: "aggettivi", ex: "Il cielo si è fatto scuro prima della tempesta.", exEn: "The sky grew dark before the storm." },
      { it: "Affidabile", en: "Reliable", pos: "adjective", cefr: "B1", cat: "aggettivi", ex: "Marco è un collaboratore fidato e affidabile.", exEn: "Marco is a trusted and reliable coworker." },
      { it: "Efficace", en: "Effective", pos: "adjective", cefr: "B2", cat: "aggettivi", ex: "Hanno adottato una metodologia didattica efficace.", exEn: "They adopted an effective teaching methodology." },
      { it: "Ambiguo", en: "Ambiguous", pos: "adjective", cefr: "B2", cat: "aggettivi", ex: "La formulazione dell'accordo appariva ambigua.", exEn: "The wording of the agreement appeared ambiguous." },
      { it: "Effimero", en: "Ephemeral / Fleeting", pos: "adjective", cefr: "C1", cat: "aggettivi", ex: "Il successo mondano è spesso un traguardo effimero.", exEn: "Worldly success is often an ephemeral milestone." },
      { it: "Intrinseco", en: "Intrinsic / Inherent", pos: "adjective", cefr: "C1", cat: "aggettivi", ex: "Il valore intrinseco dell'opera trascende il tempo.", exEn: "The intrinsic value of the work transcends time." },
      { it: "Fulgido", en: "Radiant / Luminous", pos: "adjective", cefr: "C1", cat: "aggettivi", ex: "Dante rimane un fulgido esempio di rigore poetico.", exEn: "Dante remains a radiant example of poetic rigor." }
    ];
  
    window.MASSIVE_VOCAB = AUTHENTIC_CORPUS;
    console.log("🇮🇹 MASSIVE_VOCAB: " + AUTHENTIC_CORPUS.length + " authentic lemmas active.");
  })();