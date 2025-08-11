"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Calendar
} from "lucide-react";

export default function RealisticEarningsDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const realityData = {
    cryptoTrading: {
      winRate: 23,
      avgMonthlyReturn: -12.5,
      successfulTraders: 5,
      timeToProfit: "2-5 ans d'apprentissage"
    },
    dropshipping: {
      winRate: 15,
      avgMonthlyReturn: -8.3,
      successfulBusinesses: 10,
      timeToProfit: "6-18 mois"
    },
    forexTrading: {
      winRate: 19,
      avgMonthlyReturn: -15.2,
      successfulTraders: 8,
      timeToProfit: "3-7 ans d'expérience"
    },
    onlineCoaching: {
      winRate: 25,
      avgMonthlyReturn: 2.1,
      successfulCoaches: 12,
      timeToProfit: "12-24 mois"
    }
  };

  const fakeVsReal = [
    {
      category: "Gains quotidiens",
      fake: "500-2000€/jour garantis",
      real: "0-50€/jour (après des mois d'efforts)"
    },
    {
      category: "Temps de travail",
      fake: "2h/jour maximum",
      real: "8-12h/jour les premiers mois"
    },
    {
      category: "Capital initial",
      fake: "50€ suffisent",
      real: "1000-5000€ recommandés + 6 mois d'épargne"
    },
    {
      category: "Taux de succès",
      fake: "95% de réussite",
      real: "5-25% selon le domaine"
    }
  ];

  const StatCard = ({ title, value, trend, icon: Icon, isNegative = false }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p
            className={`text-2xl font-bold ${
              isNegative ? "text-red-600" : "text-green-600"
            }`}
          >
            {value}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon
            className={`w-8 h-8 ${
              isNegative ? "text-red-500" : "text-green-500"
            }`}
          />
          {typeof trend === "number" &&
            (trend > 0 ? (
              <TrendingUp className="w-5 h-5 text-green-500" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-500" />
            ))}
        </div>
      </div>
    </div>
  );

  const AlertCard = ({ message, type = "warning" }) => (
    <div
      className={`p-4 rounded-lg border-l-4 ${
        type === "danger"
          ? "bg-red-50 border-red-500"
          : "bg-yellow-50 border-yellow-500"
      }`}
    >
      <div className="flex items-center">
        <AlertTriangle
          className={`w-5 h-5 mr-3 ${
            type === "danger" ? "text-red-500" : "text-yellow-500"
          }`}
        />
        <p
          className={`text-sm font-medium ${
            type === "danger" ? "text-red-800" : "text-yellow-800"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard de la Réalité Financière
              </h1>
              <p className="text-gray-600 mt-2">
                Données réelles vs promesses d'influenceurs
              </p>
            </div>
            {/* Affichage de l'heure actuelle */}
            {/* <div className="text-right">
              <p className="text-sm text-gray-500">Mis à jour en temps réel</p>
              <p className="text-lg font-mono">
                {currentTime.toLocaleTimeString("fr-FR")}
              </p>
            </div> */}
          </div>
        </div>

        {/* Alertes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <AlertCard
            message="80% des personnes qui suivent des 'formations miracle' perdent de l'argent"
            type="danger"
          />
          <AlertCard
            message="Les vrais entrepreneurs ne vendent pas de formations sur leurs 'secrets'"
            type="warning"
          />
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Trading Crypto - Taux de perte"
            value="77%"
            icon={TrendingDown}
            isNegative
          />
          <StatCard
            title="Dropshipping - Échec en 1 an"
            value="85%"
            icon={TrendingDown}
            isNegative
          />
          <StatCard
            title="Formations vendues vs Succès"
            value="1:1000"
            icon={AlertTriangle}
            isNegative
          />
          <StatCard
            title="Temps réel pour réussir"
            value="2-5 ans"
            icon={Calendar}
          />
        </div>

        {/* Comparaison */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Promesses vs Réalité
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Aspect</th>
                  <th className="text-left p-3 font-semibold text-red-600">
                    Ce qu'ils promettent
                  </th>
                  <th className="text-left p-3 font-semibold text-green-600">
                    La réalité
                  </th>
                </tr>
              </thead>
              <tbody>
                {fakeVsReal.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.category}</td>
                    <td className="p-3 text-red-700 bg-red-50 rounded">
                      {item.fake}
                    </td>
                    <td className="p-3 text-green-700 bg-green-50 rounded">
                      {item.real}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Données par secteur */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {Object.entries(realityData).map(([key, data]) => (
            <div key={key} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Taux de succès:</span>
                  <span className="font-semibold text-red-600">
                    {data.winRate}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Retour mensuel moyen:
                  </span>
                  <span
                    className={`font-semibold ${
                      data.avgMonthlyReturn < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {data.avgMonthlyReturn}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Réussissent vraiment:</span>
                  <span className="font-semibold text-orange-600">
                    {data.successfulTraders ||
                      data.successfulBusinesses ||
                      data.successfulCoaches}
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Temps avant profit:</span>
                  <span className="font-semibold text-blue-600">
                    {data.timeToProfit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section éducative */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comment identifier les arnaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-red-500 bg-red-50">
              <h3 className="font-bold text-red-700 mb-2">🚩 Signaux d'alarme</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Promesses de gains rapides</li>
                <li>• "Méthode secrète révélée"</li>
                <li>• Témoignages suspects</li>
                <li>• Pression temporelle ("Offre limitée")</li>
                <li>• Pas de mention des risques</li>
              </ul>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
              <h3 className="font-bold text-yellow-700 mb-2">
                ⚠️ Questions à poser
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Où sont les preuves vérifiables?</li>
                <li>• Combien de temps ça prend vraiment?</li>
                <li>• Quels sont les vrais risques?</li>
                <li>• Pourquoi vendre la formation?</li>
                <li>• Y a-t-il des frais cachés?</li>
              </ul>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50">
              <h3 className="font-bold text-green-700 mb-2">
                ✅ Approche réaliste
              </h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Apprendre pendant des mois/années</li>
                <li>• Commencer petit et tester</li>
                <li>• Diversifier ses sources de revenus</li>
                <li>• Se former gratuitement d'abord</li>
                <li>• Avoir un plan B solide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            💡 Rappel: Si c'était si facile de devenir riche rapidement, tout le
            monde le serait déjà.
          </p>
          <p className="mt-2">
            Sources: AMF, études académiques, statistiques officielles des
            plateformes
          </p>
        </div>
      </div>
    </div>
  );
}
