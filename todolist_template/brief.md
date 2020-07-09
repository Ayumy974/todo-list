# Brief

Vous devez - à partir de la maquette - réaliser les comportements de l'application Todo avec React.
Vous partirez de la maquette HTML, réaliserez la décomposition en composants et implémenterez les comportements

# Comportements

## List

1. La liste de toutes les todos s'affiche verticalement

2. Chaque todo possède un titre et un état (fait, à faire)

3. Quand on remplie le champ et que l'on frappe ENTER, une nouvelle todo est ajoutée au sommet de la liste et le champ est vidé

4. Quand on click sur le titre de la todo, son état change.

5. Quand on click sur la croix rouge, on supprime la todo.

6. Quand on fait un double click sur le titre de la todo, on peut l'éditer. Une frappe sur ENTER valide les changements.

## Footer

1. L'information de gauche affiche les todos qui reste à faire

2. Le bouton de droite affiche les todos qui sont faites. quand on click, les todos faites sont supprimées

3. Les 3 boutons centraux permettent d'afficher toutes les todos (_All_), seulement celles qui ne sont pas faites (_Active_) ou celles qui sont faites uniquement (_Completed_)

Architecture
- App -> state
    - TodoList -> toutes les todos
        - Todo -> ...[title, done] click
    - Info [nb todo done / nb todo ]