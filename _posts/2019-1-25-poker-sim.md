---
layout: article
title: 'Texas Hold'em Is A Bad Bet'
date: 2018-7-20
---

While watching the 2018 World Series of Poker, I decided to create a <a href="https://github.com/trattner/poker-sim" target="_blank">Texas Hold'em simulation in Python</a>. I wanted to discover if it's reasonable to try earning a wage with optimal play. With a simple model that assumes bets are small and plays good pocket hands through, we can get a feel for the game's variance.

The <a href="https://github.com/trattner/poker-sim/blob/master/hold-em.py" target="_blank">game representation</a> includes cards with face values and suits, a standard 52-card deck which randomly deals, and a table with players who each hold a hand of cards. To <a href="https://github.com/trattner/poker-sim/blob/master/analyze2.py" target="_blank">analyze</a> the game and determine an optimal strategy, it was necessary to parse hands and compare their relative strengths. I generated some tables to see how all possible pocket hands stacked up. How often can we expect to be dealt each hand, what is the expected value, and when do the cumulative returns diminish to the point where we should fold immediately?

![good hands][table1]

![middle hands][table3]

![bad hands][table2]

To ensure accuracy, I checked commonly accepted results like <a href="https://www.tightpoker.com/poker_hands.html" target="_blank">this website</a> and <a href="https://wizardofodds.com/games/texas-hold-em/" target="_blank">this one</a>.

After <a href="https://github.com/trattner/poker-sim/blob/master/analyze2.py" target="_blank">implementing the optimal strategy</a>, I think it's safe to conclude poker is not a mathematically reliable source of income. With the kinds of betting structures typically available, playing pocket cards on autopilot is not a good way to game the system. Although overall chances go up significantly with more crowded tables, variance is still a killer. Even a perfect player will bust far too frequently due to chance alone.

![simulated returns with optimal play][n5]

![simulated returns][n6]

![simulated returns][n7]

![simulated returns][n8]

Yet there are people who have made a living playing poker. The




For 5 players, bust 0.7078 (0.0705348140991) and cashout 0.2574 (0.0700088565826).

For 6 players, bust 0.2666 (0.0668164650367) and cashout 0.7314 (0.0670077607446).

For 7 players, bust 0.1692 (0.0573703756306) and cashout 0.8308 (0.0573703756306).

For 8 players, bust 0.1588 (0.053726715887) and cashout 0.8412 (0.053726715887)


analysis

verification



Conclusions
People still make it work
Too much variance, bust often so sad
better with more players, significantly. real world conditions hard to do this. meta-considerations very high, it's not actually about playing.
Skill at table vs other players most important

[table1]: /img/poker-sim/ranking-top.png#L
[table2]: /img/poker-sim/ranking-bottom.png#L
[table3]: /img/poker-sim/ranking-middle.png#L
[n5]: /img/poker-sim/5-bust.png#L
[n6]: /img/poker-sim/6-bust.png#L
[n7]: /img/poker-sim/7-bust.png#L
[n8]: /img/poker-sim/8-win.png#L
